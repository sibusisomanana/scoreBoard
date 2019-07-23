import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LineupPage } from '../lineup/lineup';

/**
 * Generated class for the ScorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-score',
  templateUrl: 'score.html',
})
export class ScorePage {

  goal: any=0;
  goal1: any=0



  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ScorePage');
  }

  score1(){
    this.goal = this.goal+1 ;
  
  }
  score2(){
    this.goal1 = this.goal1+1 ;
  }

  gameover(){
    this.goal = 0;
    this.goal1 = 0;
  }
  viewLineup(){
    this.navCtrl.push(LineupPage);
  }
  playVideo(){
    this.navCtrl.push(LineupPage)
  }



}
