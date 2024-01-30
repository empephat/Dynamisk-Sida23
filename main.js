// Skapa en variabel för knappen
const darkModeToggle = document.getElementById("darkModeToggle");
// Skapa en variabel för ankortaggarna
const anchorTags = document.querySelectorAll("a");
// Skapa en variabeln som innehåller ett boolean värde om darkmode är på eller inte
const isDarkModeEnabled = localStorage.getItem("darkModeEnabled");

// Lyssna på knappen när den klickas
darkModeToggle.addEventListener("click", function() {
    if (darkModeToggle.checked) {
// Slår på svart bakgrund och vit text
    document.body.style.background = "black";
    document.body.style.color = "white";
// Slår på vit text på länkar
    anchorTags.forEach(function(anchor) {
        anchor.style.color = "white";
    });
    localStorage.setItem("darkModeEnabled", "true");
    } else {
 // Återstället till standard läge
    document.body.style.background = ""; 
    document.body.style.color = "";
    anchorTags.forEach(function(anchor) {
        anchor.style.color = "";
    });
    localStorage.removeItem("darkModeEnabled");
    }
   
    gtag('event', 'button_click', {
    'category': 'darkmode',
    'value': 1
    });



});

// Låter darkmode vara på om det är ikryssat av användaren
if (isDarkModeEnabled) {
    document.body.style.background = "black";
    document.body.style.color = "white";
    anchorTags.forEach(function(anchor) {
        anchor.style.color = "white";
    });
    darkModeToggle.checked = true;
}
// Modal Window Script - Denna kod är tagen från en annan sida

function openModal(url) {
    document.getElementById('modalIframe').src = url;
    document.getElementById('myModal').style.display = 'block';
  }

  function closeModal() {
    document.getElementById('modalIframe').src = '';
    document.getElementById('myModal').style.display = 'none';
  }