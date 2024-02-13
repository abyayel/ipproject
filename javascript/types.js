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
 

  const slides = document.querySelectorAll('.suggestion-slide');
  let currentSlide = 0;

  function showSlide(index) {
      slides.forEach((slide, i) => {
          if (i === index) {
              slide.style.display = 'block';
          } else {
              slide.style.display = 'none';
          }
      });
  }

  function updateSlide() {
      showSlide(currentSlide);
      currentSlide = (currentSlide + 1) % slides.length;
  }

  function startSlideshow() {
      updateSlide(); // Initial update
      setInterval(updateSlide, 5000); // Update every 5 seconds
  }

  startSlideshow();



   var readMoreLink = document.getElementById("readMoreLink");
    var modal = document.getElementById("myModal");
    var modalContent = document.getElementById("modalContent");

    if (readMoreLink) {
        readMoreLink.addEventListener("click", function (event) {
            event.preventDefault();

            var fullDescriptionElement = document.getElementById("description");

            if (fullDescriptionElement) {
                modalContent.innerHTML = fullDescriptionElement.innerHTML;
                modal.style.display = "flex";
                document.body.classList.add('modal-open');
            }
        });
    }

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
            document.body.classList.remove('modal-open');
        }
    });

    var subscribeOrRegister = '';
    var subscriberLink = document.getElementById("subscriber-button");
    var modal = document.getElementById("myModal");
    var modalContent = document.getElementById("modalContent");
    var loginModal = document.getElementById("loginModal");
    var registrationModal = document.getElementById("registrationModal");

    if (subscriberLink) {
        subscriberLink.addEventListener("click", function (event) {
            event.preventDefault();

            if (subscribeOrRegister === 'register') {
                registrationModal.style.display = "flex";
            } else {
                loginModal.style.display = "flex";
            }

            document.body.classList.add('modal-open');
        });
    }

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
            document.body.classList.remove('modal-open');
        }
        if (event.target === loginModal) {
            loginModal.style.display = "none";
            document.body.classList.remove('modal-open');
            subscribeOrRegister = '';
        }
        if (event.target === registrationModal) {
            registrationModal.style.display = "none";
            document.body.classList.remove('modal-open');
            subscribeOrRegister = 'register';
        }
    });

    var showRegisterModal = document.getElementById("showRegisterModal");

    if (showRegisterModal) {
        showRegisterModal.addEventListener("click", function () {
            subscribeOrRegister = 'register';
            loginModal.style.display = "none";
            registrationModal.style.display = "flex";
        });
    }

    var showLoginModal = document.getElementById("showLoginModal");

    if (showLoginModal) {
        showLoginModal.addEventListener("click", function () {
            subscribeOrRegister = '';
            registrationModal.style.display = "none";
            loginModal.style.display = "flex";
        });
    }

    var closeModalButtons = document.querySelectorAll(".modal-close-button");

    closeModalButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            closeModal();
        });
    });

    var closeLoginModalButton = document.getElementById("closeLoginModal");

    if (closeLoginModalButton) {
        closeLoginModalButton.addEventListener("click", function () {
            closeLoginModal();
        });
    }

    var closeRegistrationModalButton = document.getElementById("closeRegistrationModal");

    if (closeRegistrationModalButton) {
        closeRegistrationModalButton.addEventListener("click", function () {
            closeRegistrationModal();
        });
    }

    function closeModal() {
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
        document.body.classList.remove('modal-open');
    }

    function closeLoginModal() {
        var loginModal = document.getElementById("loginModal");
        loginModal.style.display = "none";
        document.body.classList.remove('modal-open');
    }

    function closeRegistrationModal() {
        var registrationModal = document.getElementById("registrationModal");
        registrationModal.style.display = "none";
        document.body.classList.remove('modal-open');
    }

    var searchBarVisible = true;
    var searchBar = document.getElementsByClassName("search-container2");
    var searchIcon = document.getElementById("search-icon");

    if (searchIcon) {
        searchIcon.addEventListener("click", function () {
            if (searchBar[0].style.display === "flex") {
                searchBar[0].style.display = "none";
            } else {
                searchBar[0].style.display = "flex";
                searchBarVisible = true;
            }
        });
    }

    function updateSearchToggleState() {
        var isSmallScreen = window.innerWidth < 1300;

        if (!isSmallScreen) {
            if (searchBarVisible) {
                searchBar[0].style.display = "none";
                searchBarVisible = false;
            }
        }
    }

    updateSearchToggleState();

    window.addEventListener("resize", updateSearchToggleState);



});