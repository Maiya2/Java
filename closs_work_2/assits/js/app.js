// let a
//  {
//   console.log(a)
//     let a 
//     console.log(a)
//     a=2
//  }
// console.log(a)


// // conat variable.........................................
// console.log(a)
// let b 
//  b= "new valie"
// console.log(b)


// const  array = [10,11,12,13];
// console.log(array.push(5))



let obj = {
    name : "Sumaiya",
    gendere : "female"
}
// console.log(obj["name"])
console.log(obj.name + " "+ obj.gendere)



let Data = {
    _name : "sumiaya",
    gender : "Female",
    fatherName : "Abdulmajeed",
    qualification : ["inter","bachelors"],
    profession : ["web div", "desing"],
    DOB : "1997-12-25",
    reglion : "Islam",
    CNIC : 00012265,
    email: "Abc@gmail.com",
    adress : ["abi","hki"],
    }
    
    let Datainstring = JSON.stringify(Data);
    localStorage.setItem('Data',Datainstring);
    
    
    let getData= localStorage.getItem('Data');
    let getDatainParse=JSON.parse(getData);
    console.log(Data);
    
    localStorage.setItem("Sumaiya","Shaikh"); //is sy add hoga....
    localStorage.getItem('Data',Datainstring); //is show hoga.......
    
    localStorage.removeItem('Data',Datainstring); //is sy removie hoga.....
    
    localStorage.clear('Data',Datainstring); //is se khtm hona......