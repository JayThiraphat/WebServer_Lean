//ใช้งาน mongoose
const mongoose = require('mongoose')

//เชื่อมไปยัง MongoDB
    const dbUrl = 'mongodb://127.0.0.1/productDB'
    mongoose.connect(dbUrl,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    })
    .then(console.log('DB is connected'))
    .catch(err=>console.log(err))

//ออกแบบ schema
let productSchema = mongoose.Schema({
    name:String,
    price:Number,
    image:String,
    description:String
})

//สร้างโมเดล
let Product = mongoose.model("products",productSchema)

//ส่งออกโมเดล
module.exports = Product

//ออกแบบฟังก์ชั้นสำหรับบันทึกข้อมูล
module.exports.saveProduct = function(model,data){
   model.save().then(data)
}
