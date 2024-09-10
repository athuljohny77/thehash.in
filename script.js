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
    document.getElementById("days").innerHTML = days + " Day";
    document.getElementById("hours").innerHTML = hours + " Hr";
    document.getElementById("minutes").innerHTML = minutes + " Min";
    document.getElementById("seconds").innerHTML = seconds + " Sec";

    // When the countdown is over
    if (timeLeft < 0) {
        clearInterval(countdown);
        document.querySelector(".coming-soon-text").innerHTML = "We have launched! Server changing... Refresh now!";
        document.querySelector(".countdown").style.display = "none";
    }
}, 1000);
