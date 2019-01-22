const router = require("express").Router();
const bodyParser = require('body-parser');

// parse
router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json());

router.get("json", (req,res)=>{
    res.json({
        status: "ok"
    });

})

module.exports = router;