const express = require('express')
//เรียกโมเดล
const Product = require('../models/product')
const router = express.Router()

//อัพโหลดไฟล์
const multer = require('multer')

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./public/images/products') //ตำแหน่งจัดเก็บไฟล์
    },
    filename:function(req,file,cb){
        cb(null,Date.now()+".jpg") //เปลี่ยนชื่อไฟล์ ป้องกันชือซ้ำกัน
    }

})
//เริ่มต้น upload
const upload = multer({
    storage:storage
})

router.get('/',(req,res)=>{
    const products = [
        {
            name:"โน็ตบุ๊ค",
            price:4500,
            image:"images/products/product1.png"
        },
        {
            name:"เสื้อผ้า",
            price:3000,
            image:"images/products/product2.png"
        },
        {
            name:"หูฟัง",
            price:1500,
            image:"images/products/product3.png"
        }
    ]
    Product.find({}).exec().then((err,doc)=>{
        res.render('index',{products:products})
    })
    //  res.render('index',{products:products})
})

router.get('/addForm',(req,res)=>{
    res.render('form')
})
router.get('/manage',(req,res)=>{
    res.render('manage')
})

// router.get('/insert',(req,res)=>{
//     console.log(req.query)
//     res.render('form')
// })
router.post('/insert',upload.single("image"),(req,res)=>{
    // console.log(req.file)
    let data =  new Product({
        name:req.body.name,
        price:req.body.price,
        image:req.file.filename,
        description:req.body.description
    })
    console.log(data)
    // Product.saveProduct(data,(err)=>{
    //     if(err) console.log(err)
    //     res.redirect('/')
    // })
    // res.render('form')
    Product.saveProduct(data,(err)=>{
        if(err) console.log(err);
        res.redirect('/')
    })
})
// const path = require('path')

// router.get("/",(req,res)=>{
//     // res.send("<h1>Hello ExpressJS |2021</h1>")
//         res.status(200)
//         res.type('text/html')
//         res.sendFile(path.join(__dirname,"../templates/index.html"))
// })
// router.get("/product/:id",(req,res)=>{
//     const productid= req.params.id
//     if(productid === "1"){
//         res.sendFile( path.join(__dirname,"../templates/product1.html"))
//     }else if(productid === "2"){
//         res.sendFile( path.join(__dirname,"../templates/product2.html"))
//     }else if(productid === "3"){
//         res.sendFile( path.join(__dirname,"../templates/product3.html"))
//     }else{
//         // res.status(404)
//         // res.send(`<h1>404 Not Found</h1>`)
//         res.redirect('/')
//     }
// })

module.exports = router