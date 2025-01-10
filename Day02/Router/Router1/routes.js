const express = require('express');
const router = express.Router();
const stars =  require('../DB/stars');

router.get('/',(req , res)=>{
    res.status(200).json(stars)
});

router.get('/:heroName',(req , res)=>{
        const name = req.params.heroName
        const found = stars.some(star=>star.name.toLocaleLowerCase() == name.toLocaleLowerCase());
        // console.log(found);
        

        if (found) {
            const UserParticular = stars.filter(star=>star.name.toLocaleLowerCase()==name.toLocaleLowerCase())
            res.status(200).json(UserParticular[0])
        }else{
            res.status(400).json({msg:`please enter write ${name} name`})
        }

    }
)


router.post('/',(req , res)=>{
    // console.log(req.body)
    if (req.body.name === "" || req.body.status  === "" || req.body.rating === "") {
        return res.status(404).json({error:`please enter all feilds `})
    
    }else{
        const newdetail = {name:req.body.name, status:req.body.status, rating:req.body.rating};
        star.push(newdetail); // {}{}{}{}
       return res.status(200).json(star);
    }

})

router.put('/',(req ,res)=>{
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

router.delete('/',(req,res)=>{
    const name =  req.body.name;
    stars = stars.filter(star => star.name !== name); 
    res.status(200).json(stars)

})

module.exports = router