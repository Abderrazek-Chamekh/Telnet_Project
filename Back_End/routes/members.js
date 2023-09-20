const express=require('express')

const router=express.Router();

const Member=require("../models/members")

const bcrypt=require('bcrypt')

const jwt=require('jsonwebtoken')


router.post('/register', async(req,res)=>{
    let data = req.body;
    let member=new Member(data);
    salt=bcrypt.genSaltSync(10)
    cryptedPass=await bcrypt.hashSync(data.password,salt);
    console.log(data)
    console.log(member)
    member.password=cryptedPass
    member.save().then((saved)=>{
     console.log("saved")
     res.status(200).send(saved);
    }).catch((err)=>{
     res.status(400).send(err);
    })
})


router.post('/login',(req,res)=>{
    let data=req.body;
    Member.findOne({"email":data.email}).then((member)=>{
        if(!member){
            res.status(404).send("member not found");
            console.log("mail 8alet")
        }
        else{
            let valid=bcrypt.compareSync(data.password,member.password)
            if(!valid){
                res.status(401).send("member not found");
                console.log("password 8alet")

            }
            else{
                let sess={
                    id:member._id,
                    name:member.name ,
                    email:member.email,
                }       
                let  token =jwt.sign(sess,'0000');
                res.status(200).send({mytoken:token})
   
            }
        }
    }).catch((err)=>{
        res.send(err)
    }
    )
})



router.get('/get',(req,res)=>{

    Member.find({})
        .then((members)=>{
            res.status(200).send(members)
                }
        
        )
        .catch((err)=>{
            res.status(400).send(err);
                }
    )
})


router.delete('/delete/:id',(req,res)=>{


    id=req.params.id 
    Member.findOneAndDelete({_id:id}).then((deleted)=>{
        res.status(200).send(deleted);

    }).catch((err)=>{
        res.status(400).send(err);
    })
}

)


module.exports=router;