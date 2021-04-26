const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config()
const connectDb=async()=>{
    await mongoose.connect(process.env.DB_URL , {useCreateIndex:true , useFindAndModify:false , useNewUrlParser:true , useUnifiedTopology:true})
    console.log(connected)
}

module.exports=connectDb