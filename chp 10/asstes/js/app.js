var _name = prompt ("what is your name" , "sumaiya")
if (_name === "sumaiya"){
    alert("correct name")
}
else{
    alert("incorrect name")
}
var score = 0
var  Qualification = prompt("Qualification")
var Q1 = prompt("whats your name")
if (Q1 === " sumaiya"){
    score++
}
else{
    if (Qualification === "inter"){score = score-2}

else {score = score-1}
}
alert("you score is" + "" + score)