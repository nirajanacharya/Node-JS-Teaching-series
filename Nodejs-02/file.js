//synchoronous
//line by line execution
 
//Asynchronous
//not line by line to line execution is guarented
// -- call back will be fire 

//lets study about asynchronous

let fs=require("fs");
fs.readFile("asyn.txt","utf-8",(err,data)=>{
    console.log(data);
})
console.log("We are reading asynchronous file")