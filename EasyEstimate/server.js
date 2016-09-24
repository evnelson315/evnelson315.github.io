// Dependencies
// =============================================================
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
// var mysql = require('mysql');
// var connection = mysql.createConnection({
//     host: "localhost",
//     port: 8889,
//     user: "root", //Your username
//     password: "root", //Your password
//     database: "estimate_DB"
// })

// connection.connect(function(err) {
//     if (err) throw err;
//     console.log("connected as id " + connection.threadId);
// })

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// (DATA)
// =============================================================
var quotes = [
]

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get('/', function(req, res){
	res.sendFile(path.join(__dirname, 'view.html'));
})



app.get('/new', function(req, res){
	res.sendFile(path.join(__dirname, 'new.html'));
})

app.get('/setup', function(req, res){
	res.sendFile(path.join(__dirname, 'setup.html'));
})

app.get('/about', function(req, res){
	res.sendFile(path.join(__dirname, 'about.html'));
})

app.get('/change', function(req, res){
	res.sendFile(path.join(__dirname, 'change.html'));
})

app.get('/help', function(req, res){
	res.sendFile(path.join(__dirname, 'help.html'));
})
app.get('/complete', function(req, res){
	res.sendFile(path.join(__dirname, 'complete.html'));
})

//===========================================================
//adding part number//
app.post('/api/new', function(req, res){

	var newEst= req.body;
	// newEst.partNumber = newEst.name.replace(/\s+/g, '').toLowerCase()

	quotes.push(newEst);

	res.json(newEst);
	
})


// =============================================================
app.listen(PORT, function(){
	console.log('App listening on PORT ' + PORT);
})