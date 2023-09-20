const mongoose =require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/Telnet')
.then(
    ()=>{
        console.log('Connected to BD')
    }
).catch(
    ()=>{

        console.log('err')
    }
)

module.exports=mongoose;














