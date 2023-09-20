const mongoose=require('mongoose');

const Member= mongoose.model('member',
{
    name:{type:String},
    firstname:{type:String},
    email:{type:String},
    password:{type:String},
    

}

)

module.exports=Member;