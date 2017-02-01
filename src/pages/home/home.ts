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
   * TODO: need to clear everything properly
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

  /**
   * Add percentage operator
   */
  public addPerecent(value) {

  }

  public setCurrentInput (value) {
    // the words hackiest solution to this problem
    if (this.operatorClicked === true ) {
      this.currentInput = '' + value + '';
    } else {
      this.currentInput = this.currentInput + '' + value + '';
    }

    this.operandNotClicked = false;
    this.operatorClicked = false;
    console.log('curr in from set')
    console.log(this.currentInput)
  }

  public operatorClick (value) {
    console.log(this.calculation)
    this.calculation = this.calculation + '' + this.currentInput + '' + value + '';
    this.operatorClicked = true;
    console.log('op calc')
    console.log(this.calculation)
  }

  /**
   * Calculate the sum
   */
  public evaluateCalculation() {
    this.calculation = this.calculation + '' + this.currentInput + '';
    try {
      this.sum = eval(this.calculation);
      this.currentInput = this.sum;
      this.calculation = '';
    } catch (error) {
      console.error('Missing operand');
    }

    console.log('sum')
    console.log(this.sum)
    console.log('currentInput')
    console.log(this.currentInput)

  }
}
