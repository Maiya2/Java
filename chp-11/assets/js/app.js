var Students= [];
var input = document.querySelector("#timein")
function time(){
    Students.push(input.value)
    input.value=""
    console.log(Students)
}
var p = document.querySelector("#totalattendance")
function checkAttendance(){
    p.innerHTML="total attendance"+ Students.length
}