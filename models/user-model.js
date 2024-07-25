const mongoose=require('mongoose');


const userSchema=mongoose.Schema.create({
  fullname:{
    type:String,
    trim:true,
  },
  Email:String,
  password:String,
  cart:{
    typeof:Array,
    default:[]
  },
  isadmin:Boolean,
  order:{
    typeof:Array,
    default:[]
  },
  contactno:Number,
  picture:String
})
module.exports =mongoose.model("user",userSchema);
