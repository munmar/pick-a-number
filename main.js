//This asks the user for input in the form of a pop up text box, then displays the chosen value accordingly
function askFor() {
    let yourNumber = prompt("Pick a number between 1-10.", "Type here...");
    document.getElementById("numbers").innerHTML = yourNumber;

    document.getElementById('loader').classList.add('active')
    let houseNumber = generate()
    setTimeout(function() {
        setTimeout(function() {
            loader()
        }, 1)
        document.getElementById("randomise").innerHTML = houseNumber
    }, 2000)

    
    scores.you.push(Number(yourNumber))
    scores.house.push(houseNumber)

    if (scores.you[0] === scores.house[0]){
        console.log('You Win')
    } else {
        console.log('You lose')
    }
}

function loader() {
    document.getElementById('loader').classList.remove('active')
}


// Generate a random number between 1-10
function generate() {
    let houseNumber = Math.floor((Math.random() * 10) + 1);
    return houseNumber
}

// Modal function
function modalOpenSettings() {
    $('.settings')
    .modal('show')
};
function modalOpenInfo() {
    $('.info')
    .modal('show')
};


// User needs to guess number via input
// The input should then disappear after the guess and should be replaced by guess
// Then House guess can generate automatically
// House guess not allowed until user input
// Evaluate answers and decide winner, reset board
// Record Results in the side or on a popup (perhaps a little button in bottom right corner with the stats etc.)

let scores = {
    you: [],
    house: []
}
console.log(scores)