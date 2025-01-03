const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())


let stars = [
   
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
    ,
    {
        name : "hardik_pandya",
        status : "--hit--",
        rating : 10
    }
    ,
    {
        name: "bumrah",
        status : "--Top--",
        rating : 100
    }
];

app.get('/stars',(req , res)=>{
    res.status(200).json(stars)
});

app.get(
    '/stars/:heroName',(req , res)=>{
        const name = req.params.heroName
        const found = stars.some(star=>star.name.toLocaleLowerCase() == name.toLocaleLowerCase());
        // console.log(found);
        

        if (found) {
            const UserParticular = stars.filter(star=>star.name.toLocaleLowerCase()==name.toLocaleLowerCase())
            res.status(200).json(UserParticular)
        }else{
            res.status(400).json({msg:`please enter write ${name} name`})
        }

    }
)


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

app.put('/stars',(req ,res)=>{
    const name = req.body.name
    const status = req.body.status
   
    
    // const bname = req.body.name
    const found = stars.some(star=>star.name == name)
console.log(found)
    if (found) {
        stars.forEach(star=>{
            if (star.name == name) {
                star.status = status
                
                console.log("i ma running");
            }})
            return res.status(200).json(stars)
    }else{
        res.status(400).json({msg:`please enter the correct Name ${name}`})

    }
})

app.delete('/stars',(req,res)=>{
    const name =  req.body.name;
    stars = stars.filter(star => star.name !== name); 
    res.status(200).json(stars)

})

app.listen(3000,()=>{
    console.log('my server is running 3000 port');
    
})