// operation 
//read sychronous file 
let fs = require("fs")
let text = fs.readFileSync("write.txt","utf-8")
console.log(text)
//replace
let replace= text.replace("he", "she")


//writing in console
console.log("The file is creating......")
fs.writeFileSync("write.txt",text);
