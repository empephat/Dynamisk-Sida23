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