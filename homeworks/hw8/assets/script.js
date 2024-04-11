document.addEventListener("DOMContentLoaded", function() {
    console.log("DOMContentLoaded event fired.");

    function toggleSongs() {
        console.log("Button clicked.");
        var songsSecondHalf = document.getElementById("songs-second-half");
        songsSecondHalf.classList.toggle("hidden");
    }

    var toggleButton = document.getElementById("toggle-button");
    console.log("Button element found:", toggleButton);
    toggleButton.addEventListener("click", toggleSongs);
});
