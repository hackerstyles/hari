const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    email:{
        type: mongoose.SchemaTypes.String,
        require:true,
        unique:true
    
    },
   
password:{
    type: mongoose.SchemaTypes.String,
    require:true,

},

createAt:{
    type: mongoose.SchemaTypes.Date,
    require:true,
    default:new Date()
}
})

const passSchema = new mongoose.Schema({

    password1:{
        type:mongoose.SchemaTypes.String,
        require:true
    },

    password2:{
        type:mongoose.SchemaTypes.String,
        require:true
    }

}) 


const inteSchema = new mongoose.Schema({
    order:{
        type:Number,
        required:true,
    },
    quantity:{
        type:Number,
        require:true
    }
})


const user = mongoose.model('user', UserSchema);


const pass = mongoose.model('pass', passSchema);

const inte = mongoose.model('inte', inteSchema);



module.exports = { user, pass ,inte};