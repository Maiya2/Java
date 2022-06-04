const slidePage = document.querySelector(".slidepage");

const firtNaxtbtn =document.querySelector(".nextBtn");//next

const prevBtnsec =document.querySelector(".prev-1");

const nextBtnSec = document.querySelector(".next-1");//next

const prevBtnThird =document.querySelector(".prev-2");

const nextBtnThird =document.querySelector(".next-2");//next

const prevBtnFourth =document.querySelector(".prev-3");

const submitBtn =document.querySelector(".submit");

const ProgressText =document.querySelectorAll(".setp p");

const ProgressCheck =document.querySelectorAll(".setp .check");

const bullet =document.querySelectorAll(".setp .bullet");
let max = 5;
let current = 1;

firtNaxtbtn.addEventListener("click", function(){
    slidePage.style.marginLeft = "-25%";
    bullet[current -  0].classlist.add("active");
    current += 1;
});

nextBtnSec.addEventListener("click", function(){
    slidePage.style.marginLeft = "-50%";
});
nextBtnThird.addEventListener("click", function(){
    slidePage.style.marginLeft = "-75%";
});

prevBtnsec.addEventListener("click", function(){
    slidePage.style.marginLeft = "-0%";
});

prevBtnThird.addEventListener("click", function(){
    slidePage.style.marginLeft = "-25%";
});

prevBtnsec.addEventListener("click", function(){
    slidePage.style.marginLeft = "-0%";  
});