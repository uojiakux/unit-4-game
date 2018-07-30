

// Start the user's score at zero

let results = 0;
let wins = 0;
let losses = 0;

// Define the crystals and their values
// You will need a Math.Random generator to change the values of each crystal image each time the window refreshes. 

const bluecrystal = Math.floor(Math.random() * 12) + 1;
const greencrystal = Math.floor(Math.random() * 12) + 1;
const purplecrystal = Math.floor(Math.random() * 12) + 1;
const redcrystal = Math.floor(Math.random() * 12) + 1;


// Define the value of the target number

    const targetNumber = Math.floor(Math.random() * 102) + 19;
    $("#target-number").text(targetNumber)


// You will need a on.("click", _____) event to define a function that will happen when the user clicks a certain image

$("#blue-crystal").on("click", function () {

    results = results + bluecrystal;
    $("#results").text(results);

    if (results === targetNumber) {
        wins++;
        $("#wins").text(wins);
        $("#wins").prepend("<p>You won!</p>");
    } else if (results > targetNumber) {
        losses++;
        $("#losses").text(losses);
        $("#losses").prepend("<p>You lose!</p>");
    }
})

$("#green-crystal").on("click", function () {

    results = results + greencrystal;
    $("#results").text(results);

    if (results === targetNumber) {
        wins++;
        $("#wins").text(wins);
        $("#wins").prepend("<p>You won!</p>");
    } else if (results > targetNumber) {
        losses++;
        $("#losses").text(losses);
        $("#losses").prepend("<p>You lose!</p>");
    }
})

$("#purple-crystal").on("click", function () {

    results = results + purplecrystal;
    $("#results").text(results);

    if (results === targetNumber) {
        wins++;
        $("#wins").text(wins);
        $("#wins").prepend("<p>You won!</p>");
    } else if (results > targetNumber) {
        losses++;
        $("#losses").text(losses);
        $("#losses").prepend("<p>You lose!</p>");
    }
})

$("#red-crystal").on("click", function () {

    results = results + redcrystal;
    $("#results").text(results);

    if (results === targetNumber) {
        wins++;
        $("#wins").text(wins);
        $("#wins").prepend("<p>You won!</p>");
    } else if (results > targetNumber) {
        losses++;
        $("#losses").text(losses);
        $("#losses").prepend("<p>You lose!</p>");
    }
})

