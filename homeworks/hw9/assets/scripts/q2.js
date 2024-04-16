// Part 1: Fill in the function unhideLightbox. Afterwards, we will make this function run when a picture is clicked on.

/**
 * Makes lightbox overlay visible, and shows the lightbox pop-up corresponding to the id
 *
 * @param {string} lightboxID The id of the lightbox pop-up to show
 */
function unhideLightbox(lightboxID) {
    // This removes the .hidden class from the #lightbox-overlay div
    document.getElementById('lightbox-overlay').classList.remove('hidden');

    // Remove the .hidden class from the div with the given id
    document.getElementById(lightboxID).classList.remove('hidden');
}

// Part 2: Make the unhideLightbox function run when a picture is clicked on.

/**
 * Calls unhideLightbox with the id of the first lightbox
 */
function unhideLightbox1() {
    // Look in q2.html to see what the id for the lightbox div for the first picture is, and call unhideLightbox
    unhideLightbox('doggo1');
}

// Set the browser to run the function unhideLightbox1 when someone clicks #picture-1
document.getElementById('picture-1').onclick = unhideLightbox1;

// Similar functions for picture 2 and 3
function unhideLightbox2() {
    unhideLightbox('doggo2');
}
document.getElementById('picture-2').onclick = unhideLightbox2;

function unhideLightbox3() {
    unhideLightbox('doggo3');
}
document.getElementById('picture-3').onclick = unhideLightbox3;

// Part 3: Now we need to be able to close the lightbox when we click outside the picture!

function closeLightbox(lightboxID) {
    // This adds the .hidden class to the #lightbox-overlay div
    document.getElementById('lightbox-overlay').classList.add('hidden');

    // Add the .hidden class to the div with the given id
    document.getElementById(lightboxID).classList.add('hidden');
}

// Set the closeAllLightboxes function to run when #lightbox-overlay is clicked on.
document.getElementById('lightbox-overlay').onclick = function() {
    closeAllLightboxes();
};

// This function closes lightbox for every .lightbox div
function closeAllLightboxes() {
    var lightboxElements = document.getElementsByClassName('lightbox');
    for (var i = 0; i < lightboxElements.length; i++) {
        var id = lightboxElements[i].id;
        closeLightbox(id);
    }
}
