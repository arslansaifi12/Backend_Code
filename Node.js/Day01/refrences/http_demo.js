
const http = require("http");
// console.log(http);

const server = http.createServer((req , res)=>{
    res.write("<h1>I am create a New Server this is first time</h1>");
    res.end("<p>thank you for visiting </p>")
});



server.listen(3000,()=>{
    console.log("server is running");
    
})











// let obj = {
//     name :" arslan",
//     getmyname : function () {
//         return {
//             naam : this.name,
//             NewName : function () {
//                 return "kaam kara m "
//             }
//         }
//     }
// }

// let tset = obj.getmyname();
// // console.log(tset);

// console.log(tset.NewName());



