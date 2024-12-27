const http = require("http");
const path = require("path");
const fs = require("fs");
// const { text } = require("stream/consumers");

const server = http.createServer((req , res)=>{

    let url = ""

    if (req.url == "/") {
        url = 'index.html'
    }else
    url = req.url

    let filepath = path.join(__dirname,url);
    console.log(filepath,"ye file path hai");

    let extnName = path.extname(filepath);
    // console.log(fileextn);
    
    let contentType = "text/html"

    switch (extnName) {
        case ".js":
            contentType = "text/javascript"
            break;
         case ".css"   :
            contentType = "text/css"
            break

        case "image.jpeg" :
        contentType = "text/jpeg" 
        break  
        
        case "image.png":
            contentType = "text/png"
            break
    }

    fs.readFile(filepath,(err,content)=>{
        if (err) {
            // console.log(err,'error aya hai ');
            
            if (err.code =="ENOENT") {
                fs.readFile(path.join(__dirname,"404.html"),(err,data)=>{
                    if (err) {
                        console.log(err,"error aayi hai");
                        
                    }else{
                        res.writeHead(200,{"content-type":"text/html"});
                        res.end(data);
                    }
                })
            }
            
        }else{
            res.writeHead(200,{"content-type":contentType});
            res.end(content);
        }
    })
})

server.listen(5000,()=>{
    console.log(`server is running 5000 port`);
    
})