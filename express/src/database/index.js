const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/hari')
.then(()=>{
  console.log("DB is connected Successfully")

})
.catch((err)=>{
  console.log(err)
})