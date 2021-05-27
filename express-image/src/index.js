var Chance = require('chance');
var chance = new Chance();

var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send( generateCompanies() );
});

app.listen(3000, function () {
	console.log('Accepting HTTP requests on port 3000');
});

function generateCompanies() {
	var numberOfCompanies = chance.integer({
		min: 5,
		max: 15
	});
	console.log(numberOfCompanies);
	var companies = [];
	for (var i = 0; i < numberOfCompanies; i++) {
		var name = chance.company();
		var address = chance.address();
		var phoneNumber = chance.phone({
			formatted: false
		});
		companies.push({
			name: name,
			address: address,
			phoneNumber: phoneNumber
		});
	};
	console.log(companies);
	return companies;
}