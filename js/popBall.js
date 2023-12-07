
document.addEventListener("DOMContentLoaded", function () {
    const numBalls = 10; // Adjust the number of balls as needed
    const ballContainer = document.getElementById("pop-game-container");
    const playButton = document.getElementById("playButton");

    // Function to create balls
    function createBalls() {
        for (let i = 0; i < numBalls; i++) {
            const ball = document.createElement("div");
            ball.className = "pop-ball";
            ball.style.backgroundColor = getRandomColor();
            ball.style.left = `${Math.random() * 100}%`; // Random horizontal position
            ball.style.animationDelay = `${Math.random()}s`; // Random animation delay
            ball.addEventListener("click", () => ball.remove()); // Remove ball on click
            ballContainer.appendChild(ball);
        }
    }

    // Event listener for the "Play" button
    playButton.addEventListener("click", function () {
        // Hide the play button
        playButton.style.display = "none";
        
        // Remove existing balls
        document.querySelectorAll(".pop-ball").forEach(ball => ball.remove());
        
        // Create new balls
        createBalls();

        // Show the play button after a delay (adjust as needed)
        setTimeout(() => {
            playButton.style.display = "block";
        }, numBalls * 1000); // Assuming each ball takes 1 second to appear
    });

    function getRandomColor() {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});