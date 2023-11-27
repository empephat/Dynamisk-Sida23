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

// Hämta data från JSON filen
async function getData() {
    try {
        // Hämta JSON filen
        let response = await fetch("../cv.json");

        // Kolla om hämtningen var OK 200
        if (!response.ok) {
            console.log("HTTP ERROR:" + response.status);
        }

        // Parscha texten
        let myData = await response.json();

        // Komma åt arrayen i JSON filen
        let experiences = myData.experiences;

        // Skapa HTML element för texten
        let xp = "";
        experiences.forEach((experience, index) => {
            //Skapa klasser på varje p
            let companyClass = `company-${index}`;
            let yearClass = `year-${index}`;
            let titleClass = `title-${index}`;

            xp += `<div>
            <p class="${titleClass}">${experience.title}</p>
            <p class="${yearClass}">${experience.year}</p>
            <p class="${companyClass}">${experience.company}</p>
                </div>`;
        })
        document.getElementById("myData").innerHTML = xp;
    } catch (error) {
        console.error('Error fetching data:', error.message);
    }
}

getData();

// Modal Window Script - Denna kod är tagen från en annan sida

function openModal(url) {
    document.getElementById('modalIframe').src = url;
    document.getElementById('myModal').style.display = 'block';
  }

  function closeModal() {
    document.getElementById('modalIframe').src = '';
    document.getElementById('myModal').style.display = 'none';
  }