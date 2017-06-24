import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {
public date29 = true;
public date30 = true;
public date31 = true;

  constructor() {
	var navTabInfo = document.getElementById("info");
	var navTabCalculate = document.getElementById("calculate");
	var navTabDefend = document.getElementById("defend");
	navTabCalculate.className += " is-active";
	navTabDefend.classList.remove("is-active");
	navTabInfo.classList.remove("is-active");
  }
  public checkDate(event){
  	var valueMonth = event.target.value;
  	if(valueMonth==1||valueMonth==3||valueMonth==5||valueMonth==7||valueMonth==8||valueMonth==10){
		this.date29 = true;
		this.date30 = true;
		this.date31 = true;
  	}else if(valueMonth==2){
		this.date29 = false;
		this.date30 = false;
		this.date31 = false;
  	}else if(valueMonth==4||valueMonth==6||valueMonth==9||valueMonth==11||valueMonth==12){
		this.date29 = true;
		this.date30 = true;
		this.date31 = false;  	
  	}
  }
  ngOnInit() {
  }

}
