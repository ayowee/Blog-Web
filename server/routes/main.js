const express = require("express");
const router = express.Router();


//Routes
router.get("/", (req, res) => {
    const locals = {
        title : "NodeJS Blog",
        Description : "Simple Blog Site that created using NodeJS, Express and MongoDB for practice!"
    }

    res.render("index.ejs", {locals});
});

module.exports = router;