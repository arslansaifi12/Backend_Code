const express = require('express');
// console.log(express);

const path = require('path')

const app = express();

// http - Method (Get,Post,Put,Delete)

// app.get("/test" , (req , res)=>{
//     res.write("<h1>hello world my beta");
//     res.end();
// });


//static server
app.use(express.static(path.join(__dirname,"publish")))

const PORT = 4000;
app.listen(PORT,()=>console.log(`server is running ${PORT} port`))