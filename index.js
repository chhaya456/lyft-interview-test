///jshint esversion:6

const express = require("express"); // install express module
const bodyParser = require("body-parser"); // install body-parser module
const app = express(); // application bind with express
const port = 3000; //tuned server on port 3000

app.use(bodyParser.urlencoded({
    extended: true
}));


app.get("/test", function(req, res) {
    res.sendFile(__dirname + "/test.html");
});

app.post("/test", function(req, res) {


    var dataStr = JSON.stringify(req.body);

    var data = JSON.parse(dataStr);

    var stringToCut = data.string_to_cut;
    console.log('--- string_to_cut is ' + stringToCut);


    // var stringToCut = req.body.sentance;// for dynamic string which enters by users.

    function cutString(str) {
        var arrName = str.split('');
        var updatedString = "";
        var ptrIndex = 2;
        for (var i = ptrIndex; i < arrName.length; i = i + 3) {
            updatedString += arrName[i];
        }

        return updatedString;
    }

    var result = cutString(stringToCut);

    res.send(JSON.stringify({ return_string: result }));

    //res.send("A string containing every third letter from the original string is : "+ " " + result);

});


app.listen(3000, function() {
    console.log("Server is starrted on port 3000!");
});