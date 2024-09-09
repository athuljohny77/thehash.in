// Set the launch date (adjust as needed)
const launchDate = new Date("Jan 01, 2025 00:00:00").getTime();

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
        document.querySelector(".coming-soon-text").innerHTML = "We have launched!";
        document.querySelector(".countdown").style.display = "none";
    }
}, 1000);
