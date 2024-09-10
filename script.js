// Set the launch date (adjust as needed)
const launchDate = new Date("Nov 01, 2024 00:00:00").getTime();

const countdown = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = launchDate - now;

    // Time calculations
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Update HTML elements
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    // When the countdown is over
    if (timeLeft < 0) {
        clearInterval(countdown);
        document.querySelector(".coming-soon-text").innerHTML = "We have launched! Server changing... Refresh now!";
        document.querySelector(".countdown").style.display = "none";
    }
}, 1000);

// Check if cookie consent has already been given
document.addEventListener("DOMContentLoaded", () => {
    const cookiePopup = document.getElementById('cookie-popup');

    if (!localStorage.getItem('cookieAccepted')) {
        // Use a small delay to make sure animation is visible
        setTimeout(() => {
            cookiePopup.classList.add('show');
        }, 500); // Delay to ensure the CSS transition starts smoothly
    }

    // Accept cookies and hide the popup
    document.getElementById('accept-cookie').addEventListener('click', () => {
        cookiePopup.classList.remove('show');
        // Store the consent in localStorage
        localStorage.setItem('cookieAccepted', 'true');
    });
});

