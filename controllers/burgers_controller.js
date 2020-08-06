var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hbsObject = {
            burger: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});
router.post("/api/burger", function (req, res) {
    console.log(req.body)
    burger.insertOne(req.body.name, function (result) {

        // Send back the reg.body of the new quote
        console.log(result);
        res.redirect("/");
    });
});

// router.put("/api/burger/:id", function (req, res) {
//     var condition = "id = " + req.params.id;
//     console.log("condition", condition);
//     burger.updateOne(condition, function (result) {
//         var hbsObject = {
//             burger: result
//         };
//         console.log("made it to the PUT response")
//         console.log(hbsObject)
//          res.render("index", hbsObject);
//     });
// });
router.put("/api/burger/:id", function (req, res) {
    var condition = "id = " + req.params.id;


    console.log("condition", condition);
    burger.updateOne("burgers", "devoured = true", condition, function (result) {
        var hbsObject = {
            burger: result
        };
        console.log("made it to the PUT resposne")
        console.log(hbsObject)
        // res.render(200).end();
        res.render("index", hbsObject);
        // return res.sendStatus(200);



    });


});



module.exports = router;

