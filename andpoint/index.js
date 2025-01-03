
const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json())

let star = [
   
    {
        name : "Turgut",
        status : "hit",
        rating :9,
    }
    ,
    {
        name : "Osman",
        status : "hit",
        rating : 8,
    }
    ,
    {
        name : "virat",
        status : "hit",
        rating : 10
    }
];
    //  Get All Data 
    app.get("/star",(req , res)=>{
        return res.status(200).json(star)
    });

    
    app.get("/star/:heroName",(req , res)=>{
        const name = req.params.heroName ;
        const found = star.some((stars) => stars.name.toLocaleLowerCase() == name.toLocaleLowerCase())

        if (found) {
             const particulerUser = star.filter((stars) => stars.name.toLocaleLowerCase() == name.toLocaleLowerCase())
             res.status(200).json(particulerUser);
        }else{
            // console.log('hero not found',name);
            
            return res.status(400).json({msg : `Star Name ${name} not found please Enter the write Name :`})
        }
    })

app.post('/star',(req , res)=>{
    // console.log(req.body)
    if (req.body.name === "" || req.body.status  === "" || req.body.rating === "") {
        return res.status(404).json({error:`please enter all feilds `})
    
    }else{
        const newdetail = {name:req.body.name, status:req.body.status, rating:req.body.rating};
        star.push(newdetail); // {}{}{}{}
       return res.status(200).json(star);
    }

})

app.delete('/star/:name',(req , res)=>{
    const name = req.params.name
    const requireName =   star.filter(stars=>stars.name !== name);
    res.status(200).json(requireName)
})

app.put('/star/:hName',(req , res)=>{
    const name = req.params.hName; 
    const status = req.body.status;
    const found = star.some(stars => stars.name == name);
    // console.log(found);
    
    if(found){
        star.forEach(stars => {
          if (  stars.name === name) {
            stars.status = status
          }
        });
        return res.status(200).json(star)
    }else{
        res.status(400).json({error:`please enter the right ${name} name `})
    }

})

let PORT = 5000
app.listen(PORT,()=>{
    console.log(`my server is running ${PORT} port`);
    
})