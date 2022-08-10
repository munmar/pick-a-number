// User needs to start the game (press deal)
const dealHand = () => {
    // User is generated a random number
    let yourNumber = generate()
    // Then House can generate number automatically
    let houseNumber = generate()

    document.getElementById('numbers').innerHTML = yourNumber;

    document.getElementById('loader').classList.add('active')
    // House guess not allowed until user input
    setTimeout(function() {
        setTimeout(function() {
            loader()
        }, 1)
        document.getElementById("randomise").innerHTML = houseNumber
    }, 2000)

    // Evaluate answers and decide winner
    if (yourNumber > houseNumber){
        console.log('You Win')
        setTimeout(function() {
            document.getElementById('result').innerHTML = 'You Win!'}, 2000)
    } else if (yourNumber < houseNumber) {
        console.log('You lose')
        setTimeout(function() {
            document.getElementById('result').innerHTML = 'You Lose!'}, 2000)
    } else {
        console.log("It's a draw. Go to War.")
        setTimeout(function() {
            document.getElementById('result').innerHTML = 'Draw! Sudden Death'}, 2000)
        
    }
    // reset for new game
    setTimeout(function(){
        window.location.reload();
    }, 5000);
}

// loader element
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


// Record Results in the side or on a popup (perhaps a little button in bottom right corner with the stats etc.)
