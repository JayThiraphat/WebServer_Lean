const express = require('express')
const app = express()
const path = require('path')
const router = require('./routes/myRouter')


app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')
app.use(express.urlencoded({extended:false})) //POST
app.use(router)
app.use(express.static(path.join(__dirname,'public')))
app.listen(8080,()=>{
    console.log("run server in port 8080")
})
