var lab1_1 = require("./lab/lab1_1").lab
// var lab1_2 = require("./lab/lab1_2").lab;

var PORT = 8080;


var urlMap = [
	{path: "/", action:__dirname + "/static/index.html"},	 
	{path: "/digest", action: lab1_1}//,
	// {path: "/instance", action: lab1_2}, 
	];

var service = require("./lib/service").http(urlMap);

service(PORT);

