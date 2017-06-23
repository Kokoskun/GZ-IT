import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-defend',
  templateUrl: './defend.component.html',
  styleUrls: ['./defend.component.css']
})
export class DefendComponent implements OnInit {

  constructor() {
	var navTab = document.getElementById("defend");
	navTab.className += " is-active";  
  }

  ngOnInit() {
  }

}
