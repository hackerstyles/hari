const { Router } = require('express');

const router =Router(); 



const homeProducts = [{
    name:"hariharan",
    email:"bhariharan2011@gmail.com",

  },
  {
    name:"ram",
    email:"bhariharan2011@gmail.com",

  },
    
  ]



router.get("/", (req,res)=> {

res.cookie('visited' ,true ,{
    maxAge: 10000,
}),
  res.send(homeProducts);
});  

router.get("/:name",(req,res)=>{
   const {name} =req.params; 

   const homeName = homeProducts.find((g) => g.name === name)
    res.send(homeName)
})

router.post("/",(req,res)=>{
 console.log(req.body) 

 homeProducts.push(req.body) 
 res.send(201)
});  


router.get('/cart',(Req,res)=>{

});

router.post('/cart/name' , (req,res)=>{
    const {name , email} =req.body;
    const cartName = {name, email };

   res.send(req.sessionID)
})
module.exports = router