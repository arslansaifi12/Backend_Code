
const http = require("http");
const path =require("path");
const fs = require("fs");

const server = http.createServer((req , res)=>{

    if (req.url == "/") {
        fs.readFile(path.join(__dirname,"openServer","index.html"),(err,data)=>{
            if (err) {
                console.log("Error",err);
                
            }else{
                res.writeHead(200,{'content-type':"text/html"});
                res.end(data);
            }
        })
        
    }else if(req.url == "/about"){

        fs.readFile(path.join(__dirname,"openServer","about.html"),(err,data)=>{
            if (err) {
                console.log("Error",err);
                
            }else{
                res.writeHead(200,{'content-type':"text/html"});
                res.end(data);
            }
        })

    }

});

const PORT = 4000;
server.listen(PORT, ()=>{
    console.log(`my server is running ${PORT} port` )
})