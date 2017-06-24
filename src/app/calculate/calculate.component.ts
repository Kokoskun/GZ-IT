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
public isSelect = false;
public valueDate=1;
public valueMonth;

public datePeriodMax=0;
public datePeriod=0;
public datePeriodMin=0;

public monthPeriodMax=0;
public monthPeriod=0;
public monthPeriodMin=0;



  constructor() {
	var navTabInfo = document.getElementById("info");
	var navTabCalculate = document.getElementById("calculate");
	var navTabDefend = document.getElementById("defend");
	navTabCalculate.className += " is-active";
	navTabDefend.classList.remove("is-active");
	navTabInfo.classList.remove("is-active");
  }
  public checkMonth(event){
  	this.valueMonth = event.target.value;
  	if(this.valueMonth==1||this.valueMonth==3||this.valueMonth==5||this.valueMonth==7||this.valueMonth==8||this.valueMonth==10){
  		this.isSelect = true;
		this.date29 = true;
		this.date30 = true;
		this.date31 = true;
  	}else if(this.valueMonth==2){
		this.isSelect = true;
		this.date29 = false;
		this.date30 = false;
		this.date31 = false;
  	}else if(this.valueMonth==4||this.valueMonth==6||this.valueMonth==9||this.valueMonth==11||this.valueMonth==12){
		this.isSelect = true;
		this.date29 = true;
		this.date30 = true;
		this.date31 = false;  	
  	}
  }

  public checkDate(event){
  	this.valueDate = event.target.value;
  }
  public processing(){
    //Check date on month (1)
    var checkMonth = this.valueMonth;
  	var dateMax=this.checkMaxDate(checkMonth);
  	var dateCheck = dateMax - this.valueDate;
  	var checkPeriodMax = this.checkInt(35-dateCheck);
  	var checkPeriod = this.checkInt(28-dateCheck);
  	var checkPeriodMin = this.checkInt(21-dateCheck);

    if(checkPeriod==0){
      this.datePeriod = dateMax;
      this.monthPeriod = checkMonth;
    }else{
      checkMonth = parseInt(checkMonth) +1;
      dateMax=this.checkMaxDate(checkMonth);
      this.datePeriod =checkPeriod;
      this.monthPeriod = checkMonth;
      checkPeriod = dateMax-checkPeriod;
      if(checkPeriod<0){
        checkPeriod = this.checkInt(checkPeriod);
        checkMonth = parseInt(checkMonth) +1;
        dateMax=this.checkMaxDate(checkMonth);
        datePeriod =checkPeriod;
        monthPeriod = checkMonth;
      }
    }
    alert(datePeriod+" : "+this.setTextMonth(monthPeriod)+" : 2560");
  }









	private checkMaxDate(numberMonth){
	  	if(numberMonth==1||numberMonth==3||numberMonth==5||numberMonth==7||numberMonth==8||numberMonth==10){
	  		return 31;
	  	}else if(numberMonth==2){
			  return 29;
	  	}else if(numberMonth==4||numberMonth==6||numberMonth==9||numberMonth==11||numberMonth==12){
			  return 30; 	
	  	}
	}
  private checkInt(value){
    if(value<0){
      return -(value);
    }else{
      return value;
    }
  }
  private setTextMonth(idMonth){
   var dataMonth = ["มกราคม", "กุมภาพันธ์", "มีนาคม","เมษายน","พฤษภาคม","มิถุนายน","กรกฎาคม","สิงหาคม","กันยายน","ตุลาคม","พฤศจิกายน","ธันวาคม"];
    return dataMonth[idMonth-1];
  }
  ngOnInit() {
  }

}
