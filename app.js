//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
var items =["Buy food", "Cook food", "Eat food"];
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.get("/", function(req, res){

    var today = new Date();
    // var currentDay = today.getDay();
    // if (currentDay() === 6 || currentDay() === 0){
    //     day = "Weekend";
    //     // res.sendFile(__dirname + "/weekend.html")
    //     // res.write("<h1>Yayy! Today is holiday</h1>")
    // } else {
    //     day = "Weekday";
    //     // res.sendFile(__dirname + "/weekday.html")
    //     // res.write("<p>It is not the weekend.");
    //     // res.write("<h1>Boo! I have to work.</h1>") 
    //     //res.send allows us to send only one piece of data. For sending multiple piece of data wwe use res.write . When node sees res.send it sees as final sending method.
    // }

    var options = {
        weekday: "long",
        day:"numeric",
        month:"long"
    };

    var day = today.toLocaleDateString("en-US", options);

    res.render("list", {kindOfDay: day, newListItems: items});
});

app.post("/", function(req, res){
    var item = req.body.newItem;
    items.push(item);
    // console.log(item)
    res.redirect("/");
})
app.listen(3000, function(){
    console.log("Server started on port 3000");
});