//@ts-check
"use-strict";
/*
    https://lendahand16.github.io
    http://www.bom.gov.au/ntc/IDO59001/IDO59001_2019_NSW_TP007.xml
*/

let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        getTides(this.responseXML);
    }
}
xhttp.open("GET", "/fish/IDO59001_2019_NSW_TP007.xml", true);
xhttp.send();

function getTides(xml=new Document()) {
    let today = {"date":"","tides":[{time:"",height:0,highTide:false}]};
    let todayXML = xml.getElementsByTagName("forecast-period")[24];
    let todayDate = new Date(todayXML.getAttribute("start-time-local"));
    today.tides = [];
    for (let tideXML of todayXML.children) {
        let tide = {time:"",height:0,highTide:false};
        let time = [new Date(tideXML.getAttribute("time-local")).getHours(),new Date(tideXML.getAttribute("time-local")).getMinutes(),"am"];
        if (time[0] > 12) {time[0]-=12; time[2] = "pm"};
        tide.time = time[0]+":"+time[1]+" "+time[2];
        tide.height = Number(tideXML.textContent);
        if (tideXML.getAttribute("instance") === "high") {
            tide.highTide = true;
        }
        today.tides.push(tide);
    }
    today.date = (String(todayDate.getDate())+" "+["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][todayDate.getMonth()]+" "+String(todayDate.getFullYear()));

    
    console.log(today);
}
