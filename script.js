// Part 1: CSS3 Transitions and Animations for Dynamic Styling Effects

// Button Hover Effect (Already handled by CSS, but you can add dynamic changes here)

// Part 2: JavaScript Functions — Scope, Parameters & Return Values

// Function to change background color of the box when clicked
function changeBoxColor(color) {
    const box = document.getElementById('box');
    box.style.backgroundColor = color;
}

// Part 3: Combining CSS Animations with JavaScript

// Trigger Box Animation on Click
document.getElementById('animateBtn').addEventListener('click', function() {
    const box = document.getElementById('box');
    box.style.transform = "rotate(45deg)"; // Triggering a rotation dynamically
});

// Card Flip Animation (Already handled by CSS, but dynamic interactions can be added)

// Show/Hide Modal
document.getElementById('showModalBtn').addEventListener('click', function() {
    const modal = document.getElementById('modal');
    modal.classList.add('show'); // Show modal
});

document.getElementById('closeModalBtn').addEventListener('click', function() {
    const modal = document.getElementById('modal');
    modal.classList.remove('show'); // Close modal
});

// Custom Function Example: Function to increment the background color change
let colorCounter = 0;
const colors = ["#2196F3", "#4CAF50", "#FF5722", "#FFC107", "#9C27B0"];

function incrementColor() {
    colorCounter = (colorCounter + 1) % colors.length;
    changeBoxColor(colors[colorCounter]);
}

// Example: Call incrementColor every 3 seconds
setInterval(incrementColor, 3000);
