require('./config/connect')
const memberApi=require('./routes/members')
const testApi=require('./routes/tests')
const express=require('express');
const cors=require('cors')

const app=express();

app.use(express.json());
app.use(cors())




app.use('/test',testApi)

app.use('/member',memberApi)




app.listen(3000,()=>{

    console.log('server works');

});
