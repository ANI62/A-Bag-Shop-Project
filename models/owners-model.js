const mongoose=require('mongoose');


const ownerSchema=mongoose.Schema.create({
  fullname:{
    type:String,
    trim:true,
  },
  Email:String,
  password:String,
  products:{
    typeof:Array,
    default:[]
  },
  picture:String,
  gstin:String,
})
module.exports =mongoose.model("owner",ownerSchema);
