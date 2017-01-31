import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public data:          Array<string>;
  public calculation:   string;
  public currentInput:  string;
  public tempSum:       string;
  public sum:           string;

  public constructor(public navCtrl: NavController) {
    this.tempSum            = '';
    this.calculation        = '';
    this.currentInput       = '';
    this.sum                = '0';
    this.data               = [];
  }

  public clear(){
    this.tempSum            = '';
    this.calculation        = '';
    this.sum                = '0';
    this.data               = [];
  }

  public togglePlusMinus () {

  }

  public addPerecent() {
    
  }

  public getOperand() {

  }

  public getOperator() {

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
