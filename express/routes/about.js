const { Router } = require('express');

const router = Router();



const aboutList = [{

    "name":"ajith",
    "state":"tamilnadu"
}
]

router.get('/',(req,res)=>{
    res.send(aboutList)
})

module.exports = router;