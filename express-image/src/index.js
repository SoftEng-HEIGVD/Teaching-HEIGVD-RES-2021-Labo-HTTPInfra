var Chance = require('chance');
var chance = new Chance();
var Express = require('express');
var app = new Express();


app.get('/', function(req, res) {
	res.send( generateStudents() );
});


app.listen(3000, function () {
	console.log('Accepting HTTP requests on port 3000.');
});

function generateStudents() {
	var numberOfPets = chance.integer({
		min: 0,
		max: 10
	});
	console.log(numberOfPets);
	var pets = [];
	for(var i = 0; i < numberOfPets; i++) {
		var gender = chance.gender();
		var birthYear = chance.year({
			min: 2000,
			max: 2019
		});
		pets.push({
			firstName : chance.first({
				gender: gender
			}),
			gender: gender,
			birthday: chance.birthday({
				year: birthYear
			}),
			animal: chance.animal()
		});
	};
	
	console.log(pets);
	return pets;
};