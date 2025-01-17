const mongoose = require('mongoose')

async function Dbconnect(params) {
    try {
        const response =await mongoose.connect('mongodb+srv://arslangzb88:Arslan786@cluster0.2vcur.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
        console.log("DB COnnected !!!!")
    } catch (error) {
        console.log("my Error",error)
    }
}

module.exports = Dbconnect
