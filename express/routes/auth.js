


const { Router } = require('express'); 

const bcrypt = require('bcrypt');

const {user, pass ,inte }= require('../src/database/schemas/user') 

const { hashpassword  , comparePassword } = require('../utili/password')

const router = Router();

router.post('/login',async(req,res)=>{
    const {email ,password} = req.body 

    if(!email || !password) return res.send(400)
    const userDB = await user.findOne({email})

    if(!userDB) return res.send(401)

    const isValid = comparePassword(password ,userDB.password)

    if(isValid) { 

        console.log("matched")
       return  res.send(200) 

     
    }
    else{

        console.log("not matched")
        res.send('Authentication not matched') 


    }
})

router.post ( '/register', async(req,res)=>{
    const {email} = req.body;
    
const userDB = await user.findOne({email} ); 


if (userDB){ 
     

    // const dbfind = await userDB.findOne([{username},{email}]);
    // console.log(dbfind);
  

    
   console.log("user already exist!") 
    res.send({msg:'user already exist!'})
    // res.status(400).send({message: `user already exist!`});

    
}

else{ 

    console.log('success!')

    

    const hashedPassword = hashpassword(req.body.password); 
    res.send({msg:'success!'})

    console.log(hashedPassword)
const newUser = await user.create({ email ,password:hashedPassword });
newUser.save();
}
}) 

const saltRounds = 10;


router.post ('/password',async(req,res)=>{
    const { password1, password2} = req.body;  


    bcrypt.hash(password1 ,saltRounds ,(err, hash)=>{

        if (err) {
            console.error('Error hashing password:', err);
            return;
          }

          console.log('Hashed Password:', hash) 


         

    })
    res.send('password store success')

    const newpass = await pass.create({ password1, password2}); 

    newpass.save();

    console.log(req.body);
    
 


   
});

  router.post('/quantity', async(req,res)=>{
    const {order, quantity }= req.body; 

         res.send('quantity success')
    const orderDB = await inte.create({order,quantity})

    orderDB.save();

    console.log("success")
})








module.exports = router;