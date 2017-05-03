//DEPNDENCIES REQUIRE

var bodyParser = require ("body-parser");
var express = require ("express");
//ASSIGN PORT NUMBER And APP

var app = express();
var PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// app path
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// SERVER LISTENER
app.listen(PORT, function(){
	console.log("here port" + PORT);
});

