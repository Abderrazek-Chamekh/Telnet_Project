const mongoose =require('mongoose')

mongoose.connect(process.env.MONGO_URI).then(
    ()=>{
        console.log('Connected to BD')
    }
).catch(
    ()=>{

        console.log('err')
    }
)

module.exports=mongoose;














