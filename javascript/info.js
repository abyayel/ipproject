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

    






    var readMoreLink = document.getElementById("readMoreLink");
    var modal = document.getElementById("myModal");
    var modalContent = document.getElementById("modalContent");

    if (readMoreLink) {
        readMoreLink.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link behavior

            // Show the modal with the full description
           
            var fullDescriptionElement = document.getElementById("description");
            if (fullDescriptionElement) {
                modalContent.innerHTML = fullDescriptionElement.innerHTML;
                modal.style.display = "flex";
                document.body.classList.add('modal-open');
                

            }
        });
    }

    // Close the modal when clicking outside of it
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
            document.body.classList.remove('modal-open');
        }
    });





    var subscribeOrRegister = ''; // Variable to track whether to subscribe or register

    var subscriberLink = document.getElementById("subscriber-button");
    var modal = document.getElementById("myModal");
    var modalContent = document.getElementById("modalContent");
    var loginModal = document.getElementById("loginModal");
    var registrationModal = document.getElementById("registrationModal");

    if (subscriberLink) {
        subscriberLink.addEventListener("click", function (event) {
            event.preventDefault();

            // Check the variable to determine whether to open login or register modal
            if (subscribeOrRegister === 'register') {
                registrationModal.style.display = "flex";
            } else {
                loginModal.style.display = "flex";
            }

            document.body.classList.add('modal-open');
        });
    }

    // Close the modals when clicking outside of them
    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
            document.body.classList.remove('modal-open');
        }
        if (event.target === loginModal) {
            loginModal.style.display = "none";
            document.body.classList.remove('modal-open');
            subscribeOrRegister = ''; // Reset the variable when closing login modal
        }
        if (event.target === registrationModal) {
            registrationModal.style.display = "none";
            document.body.classList.remove('modal-open');
            subscribeOrRegister = 'register'; // Reset the variable when closing register modal
        }
    });

    var showRegisterModal = document.getElementById("showRegisterModal");
    if (showRegisterModal) {
        showRegisterModal.addEventListener("click", function () {
            subscribeOrRegister = 'register'; // Set the variable to 'register' when clicking the register link
            loginModal.style.display = "none";
            registrationModal.style.display = "flex";
        });
    }

    var showLoginModal = document.getElementById("showLoginModal");
    if(showLoginModal){
        showLoginModal.addEventListener("click", function () {
            subscribeOrRegister = ''; // Set the variable to 'register' when clicking the register link
            registrationModal.style.display = "none";
            loginModal.style.display = "flex";
        });
    }



});
