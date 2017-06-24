import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {

  constructor() {
	var navTabInfo = document.getElementById("info");
	var navTabCalculate = document.getElementById("calculate");
	var navTabDefend = document.getElementById("defend");
	navTabInfo.className += " is-active";
	navTabDefend.classList.remove("is-active");
	navTabCalculate.classList.remove("is-active");

  }

  ngOnInit() {
  }

}
