const express= require('express')
const app = express()
const mongoose=require('mongoose')
const {MONGOURI}=require('./keys')




mongoose.connect(MONGOURI)
mongoose.connection.on('connected',()=>{
    console.log("connected to mongo yeah")
    })
mongoose.connection.on('error',(err)=>{
    console.log("err connecting",err)
    })

    require('./models/user')
    require('./models/post')
    app.use(express.json())
    
    app.use(require('./routes/auth'))
    app.use(require('./routes/post'))



app.listen(5000,()=>{
    console.log("Server is up and running")
})