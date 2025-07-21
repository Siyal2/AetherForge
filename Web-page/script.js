// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Toggle visibility of berry info boxes
    const learnMoreButtons = document.querySelectorAll('.learn-more');
    learnMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const berryType = this.dataset.berry;
            const infoBox = document.getElementById(`${berryType}-info`);

            // Toggle the 'hidden' class
            infoBox.classList.toggle('hidden');

            // Change button text based on visibility
            if (infoBox.classList.contains('hidden')) {
                this.textContent = `Learn More About ${berryType.charAt(0).toUpperCase() + berryType.slice(1)}s`;
            } else {
                this.textContent = `Hide Info About ${berryType.charAt(0).toUpperCase() + berryType.slice(1)}s`;
            }
        });
    });

    // Fun facts rotation
    const funFacts = [
        "Did you know that **bananas are botanically considered berries**, while strawberries are not?",
        "**Avocados** are single-seed berries, not vegetables.",
        "The **raspberry** is a member of the rose family.",
        "It takes approximately 200 **cranberries** to make one can of cranberry sauce.",
        "There are over 600 species of **strawberries** worldwide.",
        "**Blueberries** are one of the only fruits native to North America."
    ];
    let currentFactIndex = 0;
    const factTextElement = document.querySelector('.fact-text');
    const nextFactButton = document.getElementById('next-fact');

    if (nextFactButton) {
        nextFactButton.addEventListener('click', () => {
            currentFactIndex = (currentFactIndex + 1) % funFacts.length;
            factTextElement.innerHTML = funFacts[currentFactIndex]; // Use innerHTML to render bold text
        });
    }
});