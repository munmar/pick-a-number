
//This asks the user for input in the form of a pop up text box, then displays the chosen value accordingly
function askFor() {
    var text;
    var yourNumber = prompt("Pick a number between 1-100.", "Type here...");

    document.getElementById("numbers").innerHTML = yourNumber;
}

//This will generate a random value from 1-100
function generate() {
    var x = document.getElementById("randomise");
    x.innerHTML = Math.floor((Math.random() * 100) + 1);
}
