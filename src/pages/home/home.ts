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
  public operatorClicked: boolean;

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
    this.operatorClicked = false;
  }

  /**
   * Clear the calculator
   */
  public clear(){
    this.operandNotClicked     = true;
    this.tempSum               = '';
    this.calculation           = '';
    this.currentInput          = '';
    this.sum                   = '0';
    this.data                  = [];
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

  /**
   * For easy to parse operands
   */
  public getOperand(value) {
    // the words hackiest solution to this problem
    if (this.operatorClicked === true ) {
      this.currentInput = '' + value + '';
    } else {
      this.currentInput = this.currentInput + '' + value + '';
    }

    this.operandNotClicked = false;
    this.calculation  = this.calculation + '' + this.currentInput + '';
    this.operatorClicked = false;
    console.log('operand')
    console.log(this.calculation)
  }

  /**
   * For easy to parse operators
   */
  public getOperator(value) {
    this.calculation = this.calculation + '' + value + '';
    this.operatorClicked = true;
    console.log('operator')
    console.log(this.calculation)
  }

  /**
   * Calculate the sum
   */
  public evaluateCalculation() {
    try {
      this.sum = eval(this.calculation);
      this.currentInput = this.sum;
    } catch (error) {
      console.error('Missing operand');
    }
  }
}
