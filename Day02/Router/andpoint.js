const express = require('express')
const cors = require('cors')

const app = express()

app.use(cors())
app.use(express.json())


app.use('/stars',require('./Router1/routes.js'))

app.listen(3000,()=>{
    console.log('my server is running 3000 port');
    
})