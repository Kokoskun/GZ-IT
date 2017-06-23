import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {

  constructor() {
	var navTab = document.getElementById("calculate");
	navTab.className += " is-active";  
  }

  ngOnInit() {
  }

}
