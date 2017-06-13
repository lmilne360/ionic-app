import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ActivityDetailsPage} from '../activity-details/activity-details';

import { ActivityModel} from './activity-model';
import { ACTIVITIES } from '../../assets/mock-data/mock-activities';

@Component({
  selector: 'page-activity',
  templateUrl: 'activity.html'
})
export class ActivityPage {
	activities: any[]

  // Need to change date to use local time Later
	myDate: string = new Date().toISOString();


  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
  	this.activities = ACTIVITIES;
    this.activities.push(new ActivityModel('Chest', this.myDate))
  }

/** Old addActivity method
  addActivity(){
  	let activity = {name: "New Activity", date: this.myDate}
  	this.activities.push(activity)
  	console.log(activity)
  }
*/

/* This function raises a prompt for user to input activity name */
  addActivity(){
    let prompt= this.alertCtrl.create({
      title: 'New Activity',
      message: "Enter the title for this activity",
      inputs: [
      {
        name: 'title',
        placeholder: 'Title'
      }],

      buttons: [
      {
        text: 'Cancel',
        handler: data =>{
          console.log('Cancel clicked');
        }
      },
      {
        text: 'Save',
        handler: data => {
          data.date = this.myDate
          this.activities.push(data)
          console.log(data)
          console.log('Save clicked');
        }
      }
      ]
    });
    prompt.present();
  }

  // Navigate to Activity details page

  selectActivity(activity){
    this.navCtrl.push( ActivityDetailsPage, { activity })
    console.log(activity);
  }

}
