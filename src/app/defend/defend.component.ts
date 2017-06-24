import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-defend',
  templateUrl: './defend.component.html',
  styleUrls: ['./defend.component.css']
})
export class DefendComponent implements OnInit {

  constructor() {
	var navTabInfo = document.getElementById("info");
	var navTabCalculate = document.getElementById("calculate");
	var navTabDefend = document.getElementById("defend");
	navTabDefend.className += " is-active";
	navTabCalculate.classList.remove("is-active");
	navTabInfo.classList.remove("is-active"); 
  }

  ngOnInit() {
  }

}
