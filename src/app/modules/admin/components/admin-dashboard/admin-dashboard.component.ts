import { Component, OnInit } from '@angular/core';
console.log(`AdminDashBoard Start componentloaded`) // This will  log always when trying to access admin path
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  constructor() {
    console.log(`AdminDashBoard componentloaded`)// // This will not log always when trying to access admin path
   }

  ngOnInit(): void {
  }

}
