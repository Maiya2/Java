function clocktiming(){
var d = new Date ();
var Sumi = d.toLocaleTimeString();
document.getElementById('ShowClock').innerHTML = Sumi;
}
clocktiming();
setInterval(clocktiming, 1000);