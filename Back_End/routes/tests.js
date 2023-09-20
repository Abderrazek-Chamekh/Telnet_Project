const express=require('express')

const router=express.Router();
router.use(express.json())


const Test=require("../models/tests")




router.post('/add',(req,res)=>{
    let data = req.body;
    console.log(data)
    let test=new Test(data);
    test.date=new Date();
    
    test.save().then((saved)=>{
     console.log("saved")
     res.status(200).send(saved);
    }).catch((err)=>{
     res.status(400).send(err);
    })
})

router.get('/get',(req,res)=>{

    Test.find({})
        .then((tests)=>{
            res.status(200).send(tests)
                }
        
        )
        .catch((err)=>{
            res.status(400).send(err);
                }
    )
})


router.delete('/delete/:id',(req,res)=>{


    id=req.params.id 
    Test.findOneAndDelete({_id:id}).then((deleted)=>{
        res.status(200).send(deleted);

    }).catch((err)=>{
        res.status(400).send(err);
    })
}

)


router.put('/update/:id',(req,res)=>{
    
    id=req.params.id 
    newData=req.body
    console.log("okkk")
    console.log(newData)
    Test.findByIdAndUpdate({_id:id},newData).then((updated)=>{
        console.log("new test : \n"+updated)
        res.status(200).send(updated);

    }).catch((err)=>{
        res.status(400).send(err);
    })



}

)



module.exports=router;