const express = require('express')
const app = express()
const router = require('./routes/myRouter')

app.use(router)

app.listen(8080,()=>{
    console.log("run server in port 8080")
})
