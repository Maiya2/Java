var CurrDate = new Date();
document.write(CurrDate + "<br>"+"<br>");

document.write(Date.now()+"<br>"+"<br>");

var d = new Date (1997,11,25 ,13,20,00,0,);
document.write( d +"<br>"+"<br>"+"<br>");

var d = new Date ("1998, dec,01, 11:13:00");
document.write(d+"<br>");

var d = new Date (1653677289813);
document.write(d+"<br>");

var currDate = new Date();
document.write(currDate.getMilliseconds()+"<br>");

var days = new Date();

days.setDate(25);
days.setFullYear(1997);
days.setMonth(11);
document.write(days +"<br>"+"<br>");

var MonthsName = ["jan","Feb","Mar","Apr","May","june","july","Aug","Sep","Oct","Nov","Dec"];
var d = new Date ();
document.write("The Current Months is " + MonthsName[d.getMonth()]);
document.write("<br>","<br>");

var  date = new Date ();
document.write(`The Current date is , ` + date + "<br>"+"<br>");


var sum = Date.now() + " " + new Date().getMilliseconds();
document.write(sum);




var clock  = setInterval(clocktiming, 1000);

function clocktiming(){
var d = new Date ();
var Sumi = d.toLocaleTimeString();
document.getElementById('ShowClock').innerHTML = Sumi;
}
clocktiming();