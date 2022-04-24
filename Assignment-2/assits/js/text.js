var inputName = document.getElementById("input1");
var date = document.getElementById("input2");

var hours = new Date().getHours();
var greetings
if (hours > 5 && hours < 12) {
    greetings = "Morning"
} else if (hours > 12 && hours < 16) {
    greetings = "Afternoon"
} else if (hours > 16 && hours < 19) {
    greetings = "Evening"
} else {
    greetings = "Night"
}

function output() {
    document.getElementById("count").innerHTML = "Hello " + inputName.value + "," + " Good " + greetings;
    var inputDate = new Date(date.value);
    document.getElementById("Birth").innerHTML = "Your Date Of Birth is " + inputDate;
    var output = new Date();
    var displayYear = output.getFullYear() - inputDate.getFullYear()
    var displayDays = output.getDate() - inputDate.getDate()
    var displayHours = output.getHours() - inputDate.getHours()
    var displaymins = output.getMinutes() - inputDate.getMinutes()
    var displaysecs = output.getSeconds() - inputDate.getSeconds()

    var totalDays = Math.floor((output - inputDate) / 1000 / 60 / 60 / 24)

    document.getElementById("final").innerHTML = "You are " + displayYear + " Years , " + displayDays + " Days , " + displayHours + " Hours , " + displaymins + " Minutes , " + displaysecs + " Seconds Old"
    document.getElementById("Total").innerHTML = "You age in Days " + totalDays

    var durationMonths = inputDate.getMonth() - output.getMonth();
    var durationDay = inputDate.getDay() - output.getDay();
    var durationhours = inputDate.getHours() - output.getHours();
    var durationmins = inputDate.getMinutes() - output.getMinutes();
    var finalDuration = document.getElementById("finalDuration").innerHTML = "There are only " + durationMonths + "months " + durationDay + " days " + durationhours + " Hours " + durationmins + " minutes left in your birthday "
}
