import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public data:            Array<string>;
  public calculation:     string;
  public currentInput:    string;
  public tempSum:         string;
  public sum:             string;
  public operandNotClicked:      boolean;
  public operatorClicked:        boolean;

  /**
   * Build object
   */
  public constructor(public navCtrl: NavController) {
    this.tempSum                = '';
    this.calculation            = '';
    this.currentInput           = '';
    this.sum                    = '0';
    this.data                   = [];
    this.operandNotClicked      = true;
    this.operatorClicked        = false;
  }

  /**
   * Clear the calculator
   */
  public clear(){
    this.tempSum                = '';
    this.calculation            = '';
    this.currentInput           = '';
    this.sum                    = '0';
    this.data                   = [];
    this.operandNotClicked      = true;
    this.operatorClicked        = false;
  }

  /**
   * Toggle negative
   */
  public togglePlusMinus (value) {
    if (this.currentInput.includes("-")){
      this.currentInput = this.currentInput.replace("-","");
    } else {
      let tempInput = this.currentInput;
      this.currentInput = '';
      this.currentInput = value + '' + tempInput + '';
    }
  }

  public convertToPercent () {
    try {
      let tempInput = parseFloat(this.currentInput);
      tempInput = tempInput / 100.0;
      if (!isNaN(tempInput)) {
        this.currentInput = tempInput.toString();
      }
    } catch (error) {
      console.error('Could not parse value');
    }
  }

  public setCurrentInput (value) {
    // the words hackiest solution to this problem
    if (this.operatorClicked === true ) {
      this.currentInput = '' + value + '';
    } else {
      this.currentInput = this.currentInput + '' + value + '';
    }

    let decimalCount = 0;
    // was going to use a regex but I'm lazy and I want to go to bed
    for (var i = 0; i < this.currentInput.length; i++) {
      if (this.currentInput[i].includes(".")) {
        // because the world is again ++ now
        decimalCount = decimalCount + 1;
      }
    }

    if (decimalCount > 1) {
      alert('Cannot have more than one deciaml in your number');
      // for some reason calling clear here doesn't put 0 back :/
      this.clear();
    }


    this.operandNotClicked = false;
    this.operatorClicked = false;
  }

  public operatorClick (value) {
    this.calculation = this.calculation + '' + this.currentInput + '' + value + '';
    this.operatorClicked = true;
  }

  /**
   * Calculate the sum
   */
  public evaluateCalculation() {
    this.calculation = this.calculation + '' + this.currentInput + '';
    try {
      this.sum = eval(this.calculation);
      if (!isNaN(parseFloat(this.sum))) {
        this.currentInput = this.sum;
        this.calculation = '';
      }
    } catch (error) {
      console.error('Missing operand');
    }
  }
}
