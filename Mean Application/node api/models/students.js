const mongoose=require('mongoose');


const StudentSchema=mongoose.Schema(
    {
        id:
        {
            type:Number,
            required:true
        },
        name:              
        {
type:String,
required:true
        },
        favlang:
        {
            type:String,
            required:true
        },
        
      
        per:
        {
           type:Number,
            required:true
        },
        state:
        {
            type:String,
            required:true
        },branch:
        {
            type:String,
            required:true
        }


    }
);


const Student=module.exports=mongoose.model('Student',StudentSchema);
