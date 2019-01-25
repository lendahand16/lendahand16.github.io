/*
    https://lendahand16.github.io
    http://www.bom.gov.au/ntc/IDO59001/IDO59001_2019_NSW_TP007.xml
*/

let xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseXML.getElementsByTagName("forecast-period")[24]);
    }
}
xhttp.open("GET", "IDO59001_2019_NSW_TP007.xml", true);
xhttp.send();