import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
export interface PeriodicElement {
  position: number;
  name: string;
  expdate: string;
  needIndex: number;
  industrySlot: string;
  email: string;
  engIndex: number;
 
   

}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'XYZ', expdate: '29/10/2019',engIndex:58, needIndex:68,industrySlot:'IT',email:'xyz@gmail.com' },
  { position: 2, name: 'XYZ', expdate: '20/10/2019', engIndex:46,needIndex: 68, industrySlot: 'IT',email: 'abc@gmail.com' }
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  authenticated: boolean = true;
  dashboard: boolean = false;
  
  displayedColumns: string[] = [

    'position',
    'name',
    'expdate',
    'needIndex',
    'industrySlot',
    'email',
    'engIndex'
  ];
  dataSource = ELEMENT_DATA;
  id: String;
  books  :{ id: number, name: string } [] = [
    { "id": 10, "name": "Active" },
    { "id": 12, "name": "Inactive" },
    { "id": 22, "name": "Total" },
    { "id": 2222, "name": "Active Employes" },
    { "id": 1111, "name": "Inactive" },
    { "id": 3333, "name": "Total" }
  ];
  name: string;
  position: number;
  weight: number;
 
  expdate: string;
  needIndex: number;
  industrySlot: string;
  email: string;
 


  constructor(private router: Router, private route: ActivatedRoute) { }
  
  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.id = params['id'];
    });
    console.log(this.id);
  }
 
  logout() {
    console.log('logout executed ');

    this.router.navigate(['']);
  }
  dash() {
    this.dashboard = true;
  }

}

