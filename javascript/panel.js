document.addEventListener("DOMContentLoaded", function () {
    var dropdownBtn = document.querySelector(".dropdown-btn");
    var chapterList = document.getElementById("chapterList");
    var dropdownContent = document.getElementById("dropdown-content");
    var searchList = document.getElementById("list-search");
    var currentChapter = extractChapterNumberFromTitle(); // Function to extract chapter number from title
    var totoalChapters= document.querySelectorAll("#chapterList li").length;

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
    if(currentChapter === totalChapters)
    {
        for(var i=0;i<nextButton.length;i++)
        {
            nextButton[i].style.display="none";
        }
    }
});
