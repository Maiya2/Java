const slidePage = document.querySelector(".slidepage");
const firtNaxtbtn =document.querySelector(".nextBtn");
const prevBtnSec =document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird =document.querySelector(".prev-2");
const nextBtnThird =document.querySelector(".next-2");
const prevBtnFourth =document.querySelector(".prev-3");
const submitBtn =document.querySelector(".submit");
const ProgressText =document.querySelectorAll(".setp p");
const ProgressCheck =document.querySelectorAll(".setp .check");
const bullet =document.querySelectorAll(".setp .bullet");
let max = 4;
let current = 1;

firtNaxtbtn.addEventListener("click", function(){
    slidePage.style.marginLeft = "-25%";
    bullet[current -  1].classlist.add("active");
    current += 1;
});
nextBtnSec.addEventListener("click", function(){
    slidePage.style.marginLeft = "-50%";
});
nextBtnThird.addEventListener("click", function(){
    slidePage.style.marginLeft = "-75%";
});

prevBtnSec.addEventListener("click", function(){
    slidePage.style.marginLeft = "0%";
});
prevBtnThird.addEventListener("click", function(){
    slidePage.style.marginLeft = "-25%";
});
prevBtnSec.addEventListener("click", function(){
    slidePage.style.marginLeft = "-50%";  
})