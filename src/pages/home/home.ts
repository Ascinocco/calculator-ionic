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
  }

  /**
   * For easy to parse operators
   */
  public getOperator(value) {
    this.operatorClicked = true;
    this.calculation = this.calculation + '' + value + '';
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
