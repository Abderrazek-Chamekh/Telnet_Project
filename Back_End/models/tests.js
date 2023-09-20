const mongoose=require('mongoose');

const Test= mongoose.model('test',
{
    Action:{type:String},
    Status:{type:String},
    Priority:{type:String},  
    Time_Limit:{type:String},
    Responsible:{type:String},
    Accomplished:{type:String},
    Remarks:{type:String}, 
    Is_Validated:{type:Boolean}, 

}

)

module.exports=Test;