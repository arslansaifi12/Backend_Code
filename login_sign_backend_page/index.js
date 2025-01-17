const express = require('express')
const Dbconnect = require('./model/Db')
const cors = require('cors')

const PORT = 4000

const app = express()



Dbconnect()
//middleware
app.use(cors())
app.use(express.json())

app.use('/user',require('./UserRouter/UserController'))



app.listen(PORT,()=>{console.log(`server is running at ${PORT}`)})





