
const fs = require("fs");

const path = require("path");

// create new folder

// fs.mkdir(path.join(__dirname,"test"), (err)=>{
//     if (err) console.log("not created");
//     else
//     console.log("folder created")
// });


// create and writefile

// fs.writeFile(path.join(__dirname,"test","hello.txt"),"helle loni" , (err)=>{
//     if (err) 
//         console.log(err,"do not create file");
//     else
//     console.log("I created file")

// });

// Read the file 

// fs.readFile(path.join(__dirname,"test","hello.txt") , 'utf-8', (err,data)=>{

//     if (err) {
//         console.log("I am not read the file",err);
        
//     }else
//     console.log("i am read file",data);
    

// })


// Rename file

fs.rename(path.join(__dirname,"test","index") , path.join(__dirname,"test","module.txt"),(err)=>{
    if (err) {
        console.log(err," i dont rename file");
        

    }else{
        console.log("i  raname file name")
    }
})