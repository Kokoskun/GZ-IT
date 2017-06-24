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
public isProcessing = false;
public datePeriodMax=0;
public datePeriod=0;
public datePeriodMin=0;

public monthPeriodMax=null;
public monthPeriod=null;
public monthPeriodMin=null;

public yearPeriodMax=0;
public yearPeriod=0;
public yearPeriodMin=0;

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
  	if(this.valueMonth==1||this.valueMonth==3||this.valueMonth==5||this.valueMonth==7||this.valueMonth==8||this.valueMonth==10||this.valueMonth==12){
  		this.isSelect = true;
		this.date29 = true;
		this.date30 = true;
		this.date31 = true;
  	}else if(this.valueMonth==2){
		this.isSelect = true;
		this.date29 = false;
		this.date30 = false;
		this.date31 = false;
  	}else if(this.valueMonth==4||this.valueMonth==6||this.valueMonth==9||this.valueMonth==11){
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
    var valueMonth = this.valueMonth;
    var valueDateMax = this.checkMaxDate(valueMonth);
    var valueDateCheck = valueDateMax - this.valueDate;

    //Check value Date
    if(valueDateCheck==0){
      valueMonth = parseInt(valueMonth)+1;
      valueDateMax = this.checkMaxDate(valueMonth);
      valueDateCheck = valueDateMax;
    }

    //Check Period
    var valuePeriodMax = 35-valueDateCheck;
    var valuePeriod = 28-valueDateCheck;
    var valuePeriodMin = 21-valueDateCheck;
    this.getPeriod(valuePeriod,valueDateMax,valueMonth,0);
    this.getPeriod(valuePeriodMax,valueDateMax,valueMonth,1);
    this.getPeriod(valuePeriodMin,valueDateMax,valueMonth,2);
    this.isProcessing =true;
  }

  /*--------------------Get Preiod----------------------*/
  private getPeriod(valueDatePeriod,valueDateMax,valueMonth,periodID){
    var valueDatePeriodNew=0;
    if(valueDatePeriod==0){
        this.setPeriod(periodID,valueDateMax,valueMonth);
    }else if(valueDatePeriod>0){
      valueMonth = parseInt(valueMonth) +1;
      valueDateMax=this.checkMaxDate(valueMonth);
      valueDatePeriodNew = valueDatePeriod - parseInt(valueDateMax); 
      if(valueDatePeriodNew<0){
        this.setPeriod(periodID,valueDatePeriod,valueMonth);
      }else if(valueDatePeriodNew>0){
        valueMonth = parseInt(valueMonth) +1;
        this.setPeriod(periodID,valueDatePeriodNew,valueMonth);
      }
    }else if(valueDatePeriod<0){
        valueDatePeriodNew = parseInt(valueDateMax) + valueDatePeriod; 
        this.setPeriod(periodID,valueDatePeriodNew,valueMonth);
    }
  }

  private setPeriod(periodID,valueDatePeriod,valueMonth){
    if(periodID==0){
        this.datePeriod =valueDatePeriod;
        this.monthPeriod = this.setTextMonth(valueMonth);
        this.yearPeriod = this.checkYear(valueMonth);
    }else if(periodID==1){
        this.datePeriodMax =valueDatePeriod;
        this.monthPeriodMax = this.setTextMonth(valueMonth);
        this.yearPeriodMax = this.checkYear(valueMonth);
    }else if(periodID==2){
        this.datePeriodMin =valueDatePeriod;
        this.monthPeriodMin = this.setTextMonth(valueMonth);
        this.yearPeriodMin = this.checkYear(valueMonth);
    }
  }
  /*----------------------End Get Preiod-------------------------*/
	private checkMaxDate(numberMonth){
	  	if(numberMonth==1||numberMonth==3||numberMonth==5||numberMonth==7||numberMonth==8||numberMonth==10||numberMonth==12||numberMonth==13||numberMonth==15){
	  		return 31;
	  	}else if(numberMonth==2||numberMonth==14){
			  return 28;
	  	}else if(numberMonth==4||numberMonth==6||numberMonth==9||numberMonth==11){
			  return 30; 	
	  	}
	}
  private checkYear(numberMonth){
    if(numberMonth>12){
      return 2561;
    }else{
      return 2560;
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
   if(idMonth==13){
    return dataMonth[0];
   }else if(idMonth==14){
    return dataMonth[1];
   }else if(idMonth==15){
    return dataMonth[2];
   }else{
    return dataMonth[idMonth-1];
   }
  }
  ngOnInit() {
  }

}
