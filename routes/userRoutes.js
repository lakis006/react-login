const router = require("express");

router.length("/test", (req, res) => {
    res.send("Hello its working");
})


module.exports = router;