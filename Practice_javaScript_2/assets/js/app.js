//Logical Operatros.

// var x = 10;
// var y = 10; 
// console.log( !x == 5 )
// >=====================================
 
//IF & Else...

// var x = 5;
// var y = 5; 
// if ( x == y ){
//     document.write("Good These Are Equal");
// }else {
//     document.write("Not Equal");
// }
// >=================================================

//If else ( & else if )

// var per = 100;

// if (per >= 80 && per <= 100){
//     document.write("you are in Merit.");
// }else if (per >= 60 && per <= 80){
//     document.write("you are in 1st Division.");
// }else if (per >= 45 && per <= 60){
//     document.write("you are in 2nd Division.");
// }else if (per >= 33 && per <= 45){
//     document.write("you are in 3rd Divison.");
// }else if (per <= 33){
//     document.write("You Are Fail.");
// }else{
// document.write("Please Enter Valid Percentage.");
// } 
//>==================================================

//Conditional Ternary Operator....

// var x = 100;
// var y;

// y = "value is " + ( x ==  100 ? "True"  :  "False" );
// document.write(y);
//>=========================================================
//Switch Case
 
// var day = 2;
//  switch (day) {
//              case 0:
//          document.write("Today is Monday")
//          break;
//               case 1: 
//         document.write("Today is Tuesday")
//          break;
//                case 2: 
//                document.write("Today is wednesday")
//          break;
//                case 3: 
//                document.write("Today is Thursday")
//          break;
//               case 4: 
//               document.write("Today is Friday")
//          break;
//               case 5: 
//               document.write("Today is Saturday")
//          break;
//                case 6: 
//                document.write("Today is Sunday")
//          break;
 
//      default:
//     document.write("Enter the Valid Day")
//  }
//>=========================================================

//Alert Box
      
    //  var a = 10; 
    //   var b = 20; 
    //   if (a > b){
    //       alert("A is Greater..");
    //   }else{
    //       alert("B is Greater..");
    //   }
    //>=====================================================
// Confirm Box

//   var a = confirm("do You like Our website..");

//   if (a){
//       alert("Thanks");
//   }else{
//     alert("Sorry");
//   }
//>=======================================================
//Prompt Box

//    var a = prompt("What is Your Name?");
//    document.write(a);


// var per = prompt("Enter your Precentage")

// if (per >= 80 && per <= 100){
//     document.write("you are in Merit.");
// }else if (per >= 60 && per <= 80){
//     document.write("you are in 1st Division.");
// }else if (per >= 45 && per <= 60){
//     document.write("you are in 2nd Division.");
// }else if (per >= 33 && per <= 45){
//     document.write("you are in 3rd Divison.");
// }else if (per <= 33){
//     document.write("You Are Fail.");
// }else{
// document.write("Please Enter Valid Percentage.");
// }  
//>========================================================
// function 

// function Hello(){
//     document.write("Hello EveryBody")
// }
// function Hi(){
//     document.write("Hello Shumaiyu")
// }
// Hello();
// document.write("<br>");
// Hi();
// document.write("<br>");
//>====================================================
//Function with Parameters

//   function Hello(fName = "sumaiya", lName = "Shaikh"){
//     document.write("Hello" + " " + fName +  " "  + lName + " <br> ");
// }
//  Hello("Sumaiya", "Shaikh");

//  function Sum( a, b ) {
//      document.write( a + b )
//  }
//  Sum(100,200);
//>==========================================================

//Function With Return Value

//   function fullname(fName = "sumaiya", lName = "Shaikh"){
//    var a = fName + "_" + lName;

//    return a ;
// }
// // var fn = fullname("Sumaiya","Shaikh");
// // document.write(fn);

// // // (addvance,,)
// // function sum(Math, eng , Sci){
// //     var s = Math + eng + Sci;

// //     return s ;
// // }
// // function  percentage (tt) {
// //     var per = tt/300 * 100;
// //     document.write(per);
// // }


// // var total = sum ( 20 , 15 , 55);
// // percentage(total);
//>=============================================
var d = new Date ();
var sumi = d.toLocaleTimeString();
document.write(sumi);