//Changing case...................
// var text1 = "hello world";
// var a = text1.toUpperCase();
// document.write(a);
//==========================================================================

 //Measuring lengthand extracting parts................
//  var sentence = "you've asked the user to give you the name of a city";
//   sentence = sentence[0]. toUpperCase() + sentence.slice(1).toLowerCase();
//   document.write(sentence);
//========================================================================================
 
//switch statements..
// var daysofweek = "sunday";
//  if (daysofweek === "monday" || daysofweek === "sunday"){
//      document.write("today is sunday");
//  }else if (daysofweek === "fri") {
//     document.write("today is Fri");
//  }
//  else {
//     document.write("invaliad")
//  }
// switch(dayofweek) {
//    case "sat":
//    document.write("today is sat");
//    break;
//    case  "sun": 
//    document.write("today is sun");
//    break;

// }
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
var days = 5;
 switch (days) {
             case 0:
         document.write("Today is Monday")
         break;
              case 1: 
        document.write("Today is Tuesday")
         break;
               case 2: 
               document.write("Today is wednesday")
         break;
               case 3: 
               document.write("Today is Thursday")
         break;
              case 4: 
              document.write("Today is Friday")
         break;
              case 5: 
              document.write("Today is Saturday")
         break;
               case 6: 
               document.write("Today is Sunday")
         break;
 
     default:
    document.write("Enter the Valid Day")
 }
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
  //switch......(case......................)

//  var pre = "97";
//  switch(pre){
//     case "97.5":
//        document.write("your grade A+");
//        break;

//        case "92.5":
//        document.write("your grade A");
//        break;

//        case "90.0":
//          document.write("your grade A-");
//          break;

//          case "87.5":
//             document.write("your grade B+");
//             break;

//             case " 82.5" :
//               document.write("your grade B")
//                 break;


//             case " 80.0" :
//               document.write("your grade B-")
//                 break;
                
//                 case " 77.5" :
//               document.write("your grade C+")
//                 break;

//                 case " 72.5" :
//               document.write("your grade C")
//                 break;

//                 case " 70.0" :
//               document.write("your grade C-")
//                 break; 
//                 case " 67.5" :
//                   document.write("your grade D+")
//                     break;
                  
//               default:
//                document.write("Pass");
               
//  }
//===============================================================================>
//loops..
// let cleanestCities = ["Seoul.", "Busan.", "Daegu", "Gwangju.", "Sejong."];
// let citytocheck = prompt("enter the city name..")
// for (const  i=0; i<=4; i++ ){
//    if (citytocheck === cleanestCities[i]);
//    alert("Its one of the cleanest cities")
//    break;
// }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// for(i=0; i<100; i++){
//    console.log(i);
// }
//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// let j=15
// do{
//   console.log(j)
//   j+=1;
// }while (j<10)
//=======================================================================================