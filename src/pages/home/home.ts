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
  public operandNotClicked:  boolean;

  /**
   * Build object
   */
  public constructor(public navCtrl: NavController) {
    this.tempSum               = '';
    this.calculation           = '';
    this.currentInput          = '';
    this.sum                   = '0';
    this.data                  = [];
    this.operandNotClicked     = true;
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
    this.operandNotClicked = false;
    this.currentInput = this.currentInput + '' + value + '';
    this.calculation  = this.currentInput;
  }

  /**
   * For easy to parse operators
   */
  public getOperator(value) {
    this.calculation = this.calculation + '' + value + '';
  }

  public buildCalculation(value) {
    this.calculation = this.calculation + '' + value + '';

    try {
      if (parseFloat(value)){
        this.sum = value;
      } else if (value === ".") {

      }
    } catch (error) {
      console.error('Cannot parse value');
    }

  }

  public evaluateCalculation(){
    try {
      this.tempSum = eval(this.calculation);
      this.sum = this.tempSum;
    } catch (error) {
      console.error(error);
      console.log('Need additional operand');
    }
  }
}
