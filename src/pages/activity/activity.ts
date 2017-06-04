import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ActivityDetailsPage} from '../activity-details/activity-details';

@Component({
  selector: 'page-activity',
  templateUrl: 'activity.html'
})
export class ActivityPage {
	activities: any[]
	myDate: String = new Date().toISOString();
  //myDate = new Date();

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
  	this.activities = [ {name: "Chest", date: this.myDate }]
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
      message: "Enter a name for this activity",
      inputs: [
      {
        name: 'name',
        placeholder: 'Name'
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
