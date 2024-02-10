document.addEventListener("DOMContentLoaded", function () {
    var dropdownBtn = document.querySelector(".dropdown-btn");
    var chapterList = document.getElementById("chapterList");
    var dropdownContent = document.getElementById("dropdown-content");
    var searchList = document.getElementById("list-search");
    var currentChapter = extractChapterNumberFromTitle(); // Function to extract chapter number from title
    var totalChapters= document.querySelectorAll("#chapterList li").length;
    var chaptersdiv = document.querySelectorAll(".chapter-container");

    chaptersdiv[currentChapter-1].style.backgroundColor = "blue";
    chaptersdiv[currentChapter-1].style.borderLeftColor = "purple";

    function extractChapterNumberFromTitle() {
        // Extract chapter number from the HTML title (assuming it's formatted like "Chapter X")
        var title = document.title;
        var match = title.match(/Chapter (\d+)/);
        return match ? parseInt(match[1]) : 1; // Default to Chapter 1 if not found
    }

    dropdownBtn.addEventListener("click", function (event) {
        dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
        // chapterList.style.display = (chapterList.style.display === "grid") ? "none" : "grid";
        // searchList.style.display = (chapterList.style.display === "block") ? "none" : "block";
        event.stopPropagation();
    });

    document.addEventListener("click", function (event) {
        var isClickInsideDropdown = searchList.contains(event.target);

        if (!isClickInsideDropdown) {
            dropdownContent.style.display = "none";
        }
    });

    
    var nextButton = document.getElementsByClassName("nextButton");
    var previousButton = document.getElementsByClassName("previousButton");
    if (nextButton) {
        for(var i=0; i< nextButton.length;i++){
        nextButton[i].href = "../ch" + (currentChapter + 1) + "/panel.html";}
    }
    if (previousButton) {
        for(var i=0; i< previousButton.length;i++){
        previousButton[i].href = "../ch" + (currentChapter - 1) + "/panel.html";}
    }

    dropdownBtn.innerHTML="Chapter " + currentChapter;
    if(currentChapter==1)
    {
     for(var i= 0; i<previousButton.length;i++)
     { previousButton[i].style.display="none"}
    }
    if(currentChapter == totalChapters)
    {
        for(var i=0;i<nextButton.length;i++)
        {
            nextButton[i].style.display="none";
        }
    }
    var searchInput = document.getElementById("chapterSearch");

    searchInput.addEventListener("input", function () {
        var searchTerm = searchInput.value.toLowerCase();

        // Hide or show chapters based on the search term
        var chapters = document.querySelectorAll("#chapterList li");

        chapters.forEach(function (chapter) {
            var chapterTitle = chapter.textContent.toLowerCase();
            if (chapterTitle.includes(searchTerm)) {
                chapter.style.display = "grid";
            } else {
                chapter.style.display = "none";
            }
        });
    });
   
    
       
        
        var container = document.querySelector(".container"); 
        var header = document.querySelector(".header");
        var firstPanel = document.querySelector(".panel");
        var headerHeight = header.offsetHeight;
        container.style.paddingTop = headerHeight + "px";
    
        var panelThreshold = firstPanel.offsetTop // Adjusted to 20px below the top
        var lastScrollTop = 0;
    
        // Set initial styles
        header.style.position = "fixed";
        header.style.top = "0";
        header.style.width = "100%";
        
       
    
        window.addEventListener("scroll", function () {
            var scrollTop = window.scrollY || document.documentElement.scrollTop;
    
            // header.style.transition = "transform 0.4s ease"; 
            if (scrollTop >= panelThreshold) {
               
                header.style.transform = "translateY(-200%)";
               
                header.style.transition = "transform 0s ease";
                // header.style.display = "none";
                
            
                if(scrollTop<lastScrollTop)
                {
                    // header.style.display= "grid";
                    
                    header.style.transform="translateY(0%)";
                    header.style.transition = "transform 0.3s ease";

                }
                
            } 
            lastScrollTop = scrollTop;
        });
    
    
    

    container.addEventListener("click",function()
    {
        
            // Scroll slightly from the current position with a smooth animation
            window.scrollBy({
                top: 150,  // Adjust the value based on your preference
                behavior: "smooth"
            });
        

    });
        
    
    
    




    
});



