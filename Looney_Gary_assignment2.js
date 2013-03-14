// SDI Project 2
// Gary W. Hunter Looney
// Year: 13 Month: 03


//Return Values
/*
var buyMilk = function(givenCash) {
	var pricePerGallon = 3,
		wholeGallons;
	
	if (givenCash < pricePerGallon) {
			console.log("That's not enough money!");
			wholeGallons = 0;
	}
	else {
	wholeGallons = Math.floor(givenCash / pricePerGallon);
	}
	return wholeGallons;
};

var gotGallons = buyMilk(1);
console.log("Thanks for buying " + gotGallons + " gallons of milk!");

//Separate
var getGreetingByName = function(name){
		var currentHour = (new Date()).getHours(),
		timeOfDay, greeting;
		if (currentHour < 12) { timeOfDay = "morning"; }
		else if (currentHour < 17) { timeOfDay = "afternoon"; }
		else { timeOfDay = "evening";}
		greeting = "Good " + timeOfDay + ", " + name + "!"
		return greeting;
};

var fullGreeting = getGreetingByName("Hunter");
console.log(fullGreeting);


//Separate
var greetByName = function(name){
		var currentHour = (new Date()).getHours(),
		timeOfDay;
		if (currentHour < 12) { timeOfDay = "morning"; }
		else if (currentHour < 17) { timeOfDay = "afternoon"; }
		else { timeOfDay = "evening";}
		console.log( "Good " + timeOfDay + ", " + name + "!");
};
greetByName("Hunter");
*/
// A lot of Encapsulation 
/*
var deckNames = [ "Berth deck", "Bridge", "Gun Deck", "Quarterdeck" ],
	minutesPerDeck = [ 30, 15, 60, 60 ];
var swabOneDeck = function(deckName, minutesThisDeck) {
			console.log("Starting to swab the " + deckName + " for " + minutesThisDeck + " minutes.");
			for (var minutes = 0; minutes < minutesThisDeck; minutes+= 5) {
						var minutesRemain = minutesThisDeck - minutes;
						console.log(minutes + " done, " + minutesRemain + " to go!");
			}
			console.log("I'm done with the " + deckName + ".");
};
var swabAllDecks = function (deckNames, minutesPerDeck) {
			for (var deckNumber = 0; deckNumber < deckNames.length; deckNumber++) {
					var deckName = deckNames[deckNumber],
					minutesThisDeck = minutesPerDeck[deckNumber];
					swabOneDeck(deckName, minutesThisDeck);
			}
};
swabAllDecks(deckNames, minutesPerDeck);
*/
//Shorthand 
/*

var c = function (message) {console.log(message)};

c ("Hi");

*/
//Functions 
/*
var pi = 3.14159;
var radius = 5;

var getArea = function (r) {
				var area = r * r * pi;
				return area;				
}

var reportArea = function (name, area, message) {
					console.log(name + "'s circle has " + area + " area, and " + message);
};

var area = getArea(10);
reportArea ("Ceiling cat", area, "is all seeing");
*/
//ReFactoring Functions 
/*var deckNames = [ "Berth deck", "Bridge", "Gun Deck", "Quarterdeck" ],
	minutesPerDeck = [ 30, 15, 60, 60 ];

var swabOneDeck = function() {
			var deckName = deckNames[deckNumber],
				minutesThisDeck = minutesPerDeck[deckNumber];
			
			console.log("Starting to swab the " + deckName + " for " + minutesThisDeck + " minutes.");
			
			for (var minutes = 0; minutes < minutesThisDeck; minutes+= 5) {
						var minutesRemain = minutesThisDeck - minutes;
						console.log(minutes + " done, " + minutesRemain + " to go!");
			}
			console.log("I'm done with the " + deckName + ".");
};
//encapsulation
for (var deckNumber = 0; deckNumber < deckNames.length; deckNumber++) {
			swabOneDeck();
};
*/
//Arrays 
/*
var captains = [
	"Hook", 
	"Morgan", 
	"Sparrow"
];
captains.push = ("Barbosa"); //add
captains.unshift = ("Blackbeard"); //add
//captains.pop(); //subtract
//captains.shift(); //subtract

//console.log(captains.length);

var adjectives = [
		"missing a hand",
		"bad",
		"insane"
];

for (var i=0, j=captains.length; i < j; i++) {
	console.log( "Captain " + captains[i] + " is " + adjectives[i] );

};
//var example = [" ". [], {}, function (){}, true, false, 0, 50, undefined];
*/
//loops 
/*
//while loop
var bOoj = 99 // counter

while(bOoj > 0) {
		
		console.log(bOoj + " bottles of oj on the wall.")
		bOoj--;		
				
				};

console.log("No more bottles of OJ on the wall.");
//for loop

for (var booj = 99; booj > 0; booj--) {

		console.log(booj + " bottles of oj on the wall.");
		
};

console.log("No more bottles of OJ on the wall.");

//for loop
for (var i = 0; i < 5; i++) {
		for (var ii = 0; ii < 3; ii++) {
		console.log( "i: " + i + ", ii: " + ii);
		};
		
};
*/