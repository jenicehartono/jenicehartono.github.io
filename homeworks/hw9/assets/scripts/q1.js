// Part 1: Code setBackgroundColor() so the background color of #q1-container changes to the color specified

/**
 * Sets the background color of #q1-container
 *
 * @param {string} color The background color that #q1-container should change to
 */
function setBackgroundColor(color) {
    document.getElementById("q1-container").style.backgroundColor = color;
}

// Part 2: Code the function redButtonClicked() and make the browser run the function for you when #q1-btn-red is clicked

// Handler function that the browser should run when the red button is clicked
function redButtonClicked() {
    setBackgroundColor("#EF476F");
}

// Set the browser to run the function redButtonClicked() when someone clicks the red button
document.getElementById("q1-btn-red").onclick = redButtonClicked;

// Part 3: Program the yellow button similar to what you did with the red button

// Handler function for the yellow button
function yellowButtonClicked() {
    setBackgroundColor("#FFD166");
}

// Set the browser to run the function yellowButtonClicked() when someone clicks the yellow button
document.getElementById("q1-btn-yellow").onclick = yellowButtonClicked;

// Part 4: A little more practice, let's do the same for the rest of the buttons

// Handler function for the green button
function greenButtonClicked() {
    setBackgroundColor("#06D6A0");
}

// Set the browser to run the function greenButtonClicked() when someone clicks the green button
document.getElementById("q1-btn-green").onclick = greenButtonClicked;

// Handler function for the light blue button
function lightBlueButtonClicked() {
    setBackgroundColor("#118AB2");
}

// Set the browser to run the function lightBlueButtonClicked() when someone clicks the light blue button
document.getElementById("q1-btn-lightblue").onclick = lightBlueButtonClicked;

// Handler function for the blue button
function blueButtonClicked() {
    setBackgroundColor("#073B4C");
}

// Set the browser to run the function blueButtonClicked() when someone clicks the blue button
document.getElementById("q1-btn-blue").onclick = blueButtonClicked;

