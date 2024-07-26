const mongoose=require('mongoose');
const degr=require('debug')('development:mongoose');
const config=require('config');

mongoose.connect(`${config.get("MONGODB_URI")}/scatch`).
then(function(){
  degr("We are connected now");
}).
catch(function(err){
  console.log("We are not connected now",err);
})

module.exports = mongoose.connection;