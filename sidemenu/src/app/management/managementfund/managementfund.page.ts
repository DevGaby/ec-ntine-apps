import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-managementfund',
  templateUrl: './managementfund.page.html',
  styleUrls: ['./managementfund.page.scss'],
})
export class ManagementfundPage implements OnInit {

  users: string[];

  constructor() {}

  ngOnInit() {
    this.initializeUsers();
  }

  initializeUsers() {
    this.users = [
      'Gaby',
      'Pratna',
      'Jean Philippe'
    ];
  }

  getUsers(ev: any) {
    // Reset items back to all of the items
    this.initializeUsers();

    // set val to the value of the searchbar
    const val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() !== '') {
      this.users = this.users.filter((user) => {
        return (user.toLowerCase().indexOf(val.toLowerCase()) > -1);
      });
    }
  }
}
