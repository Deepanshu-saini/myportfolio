import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor() { }
  name='Deepanshu Saini';
  college='Jaypee Institute of Information Technology';
  ngOnInit(): void {
  }

}
