document.addEventListener("DOMContentLoaded", function () {
    var darkModeToggle = document.querySelector('.dark-mode');
    darkModeToggle.addEventListener('click', toggleDarkMode);

    function toggleDarkMode() {
        document.body.classList.toggle('dark-body');

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

    var randomReadButton = document.getElementById("header-random-read");
    if (randomReadButton) {
        randomReadButton.addEventListener("click", function () {
            redirectToRandomManga();
        });
    }

    function redirectToRandomManga() {
        // Define an array of chapter URLs
        var randomURLs = [
            "info/naruto.html",
            "info/a-bride's-story.html",
            "info/cheese-in-the-trap","info/dragon-ball.html","info/one-piece.html","info/monster.html","info/sailor-moon.html"
        ];

        // Get a random index from the array
        var randomIndex = Math.floor(Math.random() * randomURLs.length);

        // Redirect the user to the random chapter URL
        window.location.href = randomURLs[randomIndex];
    }
 
    const slides =[ [
    "Jujustu Kaisen", 
    "info/img/jujutsu-kaisen.jpg",
    "panels/jujutsu-kaisen/ch1/panel.html",   // Read link
    "info/jujustu-kaisen.html"               // Info link
  ],
  [
    "Naruto",
    "info/img/naruto.jpg",
    "panels/naruto/ch1/panel.html",
    "info/naruto.html"
  ],
  [
    "One Piece",
    "info/img/one-piece.jpg",
    "panels/one-piece/ch1/panel.html",
    "info/one-piece.html"
  ]
];

  let currentSlide = 0;

  function updateSlide() {
    // const [title, image, readLink, infoLink ] = slides[currentSlide];
    

    document.getElementById("slide-title").innerHTML = slides[currentSlide][0];
    document.getElementById("slide-poster").href = slides[currentSlide][2];
    document.getElementById("slide-poster").querySelector("img").src = slides[currentSlide][1];
    document.getElementById("slide-read-link").href = slides[currentSlide][2];
    document.getElementById("slide-info-link").href = slides[currentSlide][3];
    document.getElementById("blurry-image").src =slides[currentSlide][1];
    // document.getElementById("blurry-background").style.backgroundImage = `url('${slides[currentSlide][1]}')`;
    //  document.getElementById("blurry-background").style.backgroundImage = `url('${slides[currentSlide][1]}')`;



    currentSlide = (currentSlide + 1) % slides.length;
  }

  function startSlideshow() {
    updateSlide(); // Initial update
    setInterval(updateSlide, 5000); // Update every 5 seconds
  }

  startSlideshow();

});