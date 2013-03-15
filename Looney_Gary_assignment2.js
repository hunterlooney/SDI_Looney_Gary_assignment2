// SDI Project 2
// Gary W. Hunter Looney
// Year: 13 Month: 03


//Stacy and Bob are stuck in a room
var characters = ["Stacy", "Bob"];
var adjectives = ["awake but dizzy.", "knocked out!"];	
for (var i=0, j=characters.length; i < j; i++) {
	console.log( characters[i] + " is " + adjectives[i] );
};
var wakeUpBob = function (awakeName, outName, treatment) {
		console.log(awakeName + " administered " + outName + " " + treatment + ".");
		};
wakeUpBob ("Stacy", "Bob", "smelling salts");		
var smellSaltTrys = 1
while (smellSaltTrys < 3) {
			console.log("Stacy administered Bob smelling salts.");
			smellSaltTrys++
			console.log("Stacy has tried smelling salts " + smellSaltTrys + " times.")
			smellSaltTrys++;
};
console.log("Stacy says, \"This isn't working, I better look around.\"") 

		
var findExit = function(lockPicksAlreadyInPocket) {
	var lockPicksNeededToEscape = 2,
		wayOut;
	
	if (lockPicksAlreadyInPocket < lockPicksNeededToEscape) {
			console.log("Stacy says, \"I can't find enough lockpicks to open the door!\"");
			console.log("Stacy says, \"I bet with Bob's help I could make it up to that window up there!\"");
			wayOut = 1;
	}
	else {
	wayOut = Math.floor(lockPicksAlreadyInPocket / lockPicksNeededToEscape);
	console.log("Stacy says, \"I'm glad I have these lockpicks!\"");
	console.log("Stacy says, \"Also, I bet with Bob's help I could make it up to that window up there!\"");
	wayOut++
	}
	if (wayOut > 2) {
		wayOut = 2
	}
	return wayOut;
};

var exit = findExit(2);
console.log("Stacy has found " + exit + " ways out!");

while (smellSaltTrys < 6) {
			console.log("Stacy says, \"I better try to wake Bob up again.\"");
			console.log("Stacy administered Bob smelling salts.");
			smellSaltTrys++
			console.log("Stacy has tried smelling salts " + smellSaltTrys + " times.");
};
if (smellSaltTrys = 6) {
		console.log("Bob woke up.") 
		}

//p: Stacy found a window that is high up.
//q: Bob is awake.
//r: Stacy found 2 lockpicks.
var p = true, q = true, r = true;
console.log("Stacy and Bob were able to escape? " + ((p && q) || r));


//Notes
//Week 1 Project
/*
//My Variables
	//String Variables
var only = "How many people are here? ",
	howManyPicks = "How many lock picks do I have? ",
	doorLocked = "Is the door locked? ",
	unlock = "I was able to use the lock picks to escape.",
	question = "Why was I in that room? ",
	a = "stranger",
	//Strings With Escapes
	whatName = ", what is your name?\"",
	onlyHere = "\"I'm the only one here.\"",
	hello = "\"Hello ",
	anotherWay = "\"I need to find another way out of this room.\""
	strangerResponse = "Stranger replies, \"My name is Bob. What are we doing here?\"", 
	//Number Variables
	lockPicks = 2,
	peopleAnswer = 2, 
	//Boolean
	lock = true
;

//Output Each Variable
console.log(doorLocked + lock)
console.log(howManyPicks + lockPicks)
console.log(unlock)
console.log(anotherWay)
console.log(only + peopleAnswer)
console.log(onlyHere)
console.log(question)
console.log(hello + a + whatName)
console.log(strangerResponse)

//My Conditionals
if (lock === true) {
	//What happens if lock === true:
	console.log(doorLocked)
	console.log(lock)
	console.log(howManyPicks + lockPicks)
	if (lockPicks >= 2) {
			//What happens if you have the needed amount of lock picks
			console.log(unlock)
	} else {
			//What happens if you do not have the needed amount of lock picks
			console.log(anotherWay)
	}
	
} else {
	//What happens if lock === false
	console.log(doorLocked)
	console.log(lock)
	console.log(only + peopleAnswer)
	//String Conditional
	if (peopleAnswer <= 1) {
		//What happens if string conditional is true
		console.log(onlyHere)
		console.log(question)
	} else {
		//What happens if string conditional is false
		console.log(hello + a + whatName)
		console.log(strangerResponse)
	}
}
*/
//Sample Story in Codelish (Code+English)
/*
Our new crewmember var crewName = "Wesley"; had only been at sea for var daysSailing = 8; 
days, but he was already rethinking his decision to become a pirate. All he had done so 
far was swab the decks = [ "Bridge", "Gun deck", "Main deck", "Quarterdeck" ];, which didn't 
feel very Pirate-y. It felt like his days were just the same thing over and over again:
Is it time to var swabTheDecks = function(decks){...};? It looks like I have 
var decksRemaining = decks.length; to go. The First Mate says I have to keep swabbing while 
(decksRemaining > 0), so I guess I'd better get to it.
And just like each day was the same, each deck was the same, so that for (var deckNumber = 0; 
deckNumber < decks.length; deckNumber++) every deck that he was told to do, he just swabbed and 
swabbed and swabbed. No matter who he complainTo = function(person,rant){...};, the result was 
always the same: return "Get back to work, " + crewName;.
In time, he kept his mind occupied by imagining what would happen if (ninjas.decideToAttack()) 
in the middle of the night.
*/
//Boolean Logic
/*
//p: The butler committed a crime.
//q: A crime took place in the foyer.
//r: There is evidence who committed the crime.
//You were told to evaluate expressions when given p as True and q and r as False. The setup for that in JavaScript would be:
var p = true, q = false, r = false;
console.log("The expression is " + ((p && q) || r));
*/
//Variable Scope
/*
var feedPirate = function (pirateName, food) {
		console.log("Gave some " +food + " to the pirate " + pirateName + "!");
		var feedMonkey = function(monkeyName, food) {
				console.log("Gave some " +food + " to " + monkeyName + "!");
		};
		feedMonkey("Jack", "biscuits");
		feedMonkey("Jill", "poop");		
		console.log(pirateName + " ate some " + food + "!");
};
feedPirate("Morgan", "oranges");
*/
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