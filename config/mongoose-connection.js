const mongoose=require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/scatch").
then(function(){
  console.log("We are connected now");
}).
catch(function(err){
  console.log("We are not connected now",err);
})

module.exports = mongoose.connection;