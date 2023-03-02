const express = require('express')
const router = express.Router()
const path = require('path')

router.get("/",(req,res)=>{
    // res.send("<h1>Hello ExpressJS |2021</h1>")
        res.status(200)
        res.type('text/html')
        res.sendFile(path.join(__dirname,"../templates/index.html"))
})
router.get("/product/:id",(req,res)=>{
    const productid= req.params.id
    if(productid === "1"){
        res.sendFile( path.join(__dirname,"../templates/product1.html"))
    }else if(productid === "2"){
        res.sendFile( path.join(__dirname,"../templates/product2.html"))
    }else if(productid === "3"){
        res.sendFile( path.join(__dirname,"../templates/product3.html"))
    }else{
        // res.status(404)
        // res.send(`<h1>404 Not Found</h1>`)
        res.redirect('/')
    }
})

module.exports = router