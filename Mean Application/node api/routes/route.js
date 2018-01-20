const express=require('express');
const router=express.Router();

const Student=require('../models/students');


// retrieve students
router.get('/students',(req,res,next)=>
{
Student.find(function(err,students)
{
    res.json(students);
})

})




//add students

router.post('/student',(req,res,next)=>
{
let newStudent=new Student({
    id:req.body.id,
    name:req.body.name,
    favlang:req.body.favlang,
    per:req.body.per,
    state:req.body.state,
    branch:req.body.branch
});

newStudent.save((err,student)=>
{
    if(err)
    {
        res.json({msg:'failed to add student'});
    }
    else{
        res.json({msg:'student added succesfully'});
    }
})
})


module.exports=router;