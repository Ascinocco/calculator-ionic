import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public data: Array<string>;
  public runningCalculation: string;
  public calculation: string;
  public runningSum: string;
  public sum: string;

  public constructor(public navCtrl: NavController) {
    this.runningCalculation = '';
    this.calculation        = '';
    this.runningSum         = '';
    this.sum                = '';

    this.data = [
       this.runningCalculation,
       this.calculation,
       this.runningSum,
       this.sum
     ];
  }

  public updateValueBar(){

  }

  public clear(){

  }

  public buildCalculation(event, value) {

  }

  public evaluateSum(){
    this.runningCalculation = 'testRunningCalc';
    this.calculation = 'testCalc';
    this.runningSum = 'runningSum';
    this.sum = 'sum';

    this.data.push(this.runningCalculation);
    this.data.push(this.calculation);
    this.data.push(this.runningSum);
    this.data.push(this.sum);

    console.log(this.data);

  }
}
