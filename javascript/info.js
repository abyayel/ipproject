document.addEventListener("DOMContentLoaded", function () {

    var darkModeToggle = document.querySelector('.dark-mode');
    darkModeToggle.addEventListener('click', toggleDarkMode);

    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');

        // Toggle moon and sun icons
        var iconElement = document.getElementById('darkModeIcon');
        var textElement = document.getElementById("darkModeText");
        // Toggle between moon and sun
        if (iconElement.classList.contains('fa-moon')) {
            iconElement.classList.remove('fa-moon');
            iconElement.classList.add('fa-sun');
            textElement.innerHTML = "Light Mode";
        } else {
            iconElement.classList.remove('fa-sun');
            iconElement.classList.add('fa-moon');
           
            textElement.innerHTML = "Dark Mode";
        }
    }


var searchInput = document.getElementById("chapter-search");

searchInput.addEventListener("input", function () {
    var searchTerm = searchInput.value.toLowerCase();

    // Hide or show chapters based on the search term
    var chapters = document.querySelectorAll(".chapters");

    chapters.forEach(function (chapter) {
        var chapterTitle = chapter.textContent.toLowerCase();
        if (chapterTitle.includes(searchTerm)) {
            chapter.style.display = "flex";
        } else {
            chapter.style.display = "none";
        }
    });
});

var randomReadButton = document.getElementById("random-read-button");
    if (randomReadButton) {
        randomReadButton.addEventListener("click", function () {
            redirectToRandomManga();
        });
    }

    function redirectToRandomManga() {
        // Define an array of chapter URLs
        var randomURLs = [
            "naruto.html",
            "a-bride's-story.html",
            "cheese-in-the-trap","dragon-ball.html","one-piece.html","monster.html","sailor-moon.html"
        ];

        // Get a random index from the array
        var randomIndex = Math.floor(Math.random() * randomURLs.length);

        // Redirect the user to the random chapter URL
        window.location.href = randomURLs[randomIndex];
    }

});
