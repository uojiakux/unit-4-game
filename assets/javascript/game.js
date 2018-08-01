

// Start the user's score at zero

var results = 0;
var wins = 0;
var losses = 0;

var bluecrystal = Math.floor(Math.random() * 12) + 1;
var greencrystal = Math.floor(Math.random() * 12) + 1;
var purplecrystal = Math.floor(Math.random() * 12) + 1;
var redcrystal = Math.floor(Math.random() * 12) + 1;


function resetCrystals() {

// Define the crystals and their values
// You will need a Math.Random generator to change the values of each crystal image each time the window refreshes. 

bluecrystal = Math.floor(Math.random() * 12) + 1;
greencrystal = Math.floor(Math.random() * 12) + 1;
purplecrystal = Math.floor(Math.random() * 12) + 1;
redcrystal = Math.floor(Math.random() * 12) + 1;

targetNumber = Math.floor(Math.random() * 102) + 19;
    $("#target-number").text(targetNumber)

}


// Define the value of the target number

    var targetNumber = Math.floor(Math.random() * 102) + 19;
    $("#target-number").text(targetNumber)


// You will need a on.("click", _____) event to define a function that will happen when the user clicks a certain image

$("#blue-crystal").on("click", function bluefunction() {

    results = results + bluecrystal;
    $("#results").text(results);

    if (results === targetNumber) {
        wins++;
        $("#wins").text(wins);
        $("#wins").prepend("<p id='wonalert'>You won!</p>");
        $("#losealert").remove();
        results = 0;
        resetCrystals();
    } else if (results > targetNumber) {
        losses++;
        $("#losses").text(losses);
        $("#losses").prepend("<p>You lose!</p>");
        $("#wonalert").remove();
        results = 0;
        resetCrystals();
    }
})

$("#green-crystal").on("click", function () {

    results = results + greencrystal;
    $("#results").text(results);

    if (results === targetNumber) {
        wins++;
        $("#wins").text(wins);
        $("#wins").prepend("<p id='wonalert'>You won!</p>");
        $("#losealert").remove();
        results = 0;
        resetCrystals();
    } else if (results > targetNumber) {
        losses++;
        $("#losses").text(losses);
        $("#losses").prepend("<p id='losealert'>You lose!</p>");
        $("#wonalert").remove();
        results = 0;
        resetCrystals();
    }
})

$("#purple-crystal").on("click", function () {

    results = results + purplecrystal;
    $("#results").text(results);

    if (results === targetNumber) {
        wins++;
        $("#wins").text(wins);
        $("#wins").prepend("<p id='wonalert'>You won!</p>");
        $("#losealert").remove();
        results = 0;
        resetCrystals();
    } else if (results > targetNumber) {
        losses++;
        $("#losses").text(losses);
        $("#losses").prepend("<p id='losealert'>You lose!</p>");
        $("#wonalert").remove();
        results = 0;
        resetCrystals();
    }
})

$("#red-crystal").on("click", function () {

    results = results + redcrystal;
    $("#results").text(results);

    if (results === targetNumber) {
        wins++;
        $("#wins").text(wins);
        $("#wins").prepend("<p id='wonalert'>You won!</p>");
        $("#losealert").remove();
        results = 0;
        resetCrystals();
    } else if (results > targetNumber) {
        losses++;
        $("#losses").text(losses);
        $("#losses").prepend("<p id='losealert'>You lose!</p>");
        $("#wonalert").remove();
        results = 0;
        resetCrystals();
    }
})

