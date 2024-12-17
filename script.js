// Initialize canvas
const canvas = document.getElementById("starfield");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext("2d");
const stars = 500;
const colorrange = [0, 60, 240];
const starArray = [];

// Utility function to get random number between min and max
function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Initialize stars with random opacity values
for (let i = 0; i < stars; i++) {
    const x = Math.random() * canvas.offsetWidth;
    const y = Math.random() * canvas.offsetHeight;
    const radius = Math.random() * 1.2;
    const hue = colorrange[getRandom(0, colorrange.length - 1)];
    const sat = getRandom(50, 100);
    const opacity = Math.random();
    starArray.push({ x, y, radius, hue, sat, opacity });
}

let frameNumber = 0;
let opacity = 0;
let secondOpacity = 0;
let thirdOpacity = 0;

// Base frame for preservation
let baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);

// Function to draw stars
function drawStars() {
    starArray.forEach(star => {
        context.beginPath();
        context.arc(star.x, star.y, star.radius, 0, 360);
        context.fillStyle = `hsla(${star.hue}, ${star.sat}%, 88%, ${star.opacity})`;
        context.fill();
    });
}

// Function to update stars' opacity
function updateStars() {
    starArray.forEach(star => {
        if (Math.random() > 0.99) {
            star.opacity = Math.random();
        }
    });
}

// Handle button click
const button = document.getElementById("valentinesButton");

button.addEventListener("click", () => {
    if (button.textContent === "Click Me! ❤") {
        button.textContent = "loading...";
        fetch('send_mail.php')
            .then(response => {
                if (response.ok) {
                    button.textContent = "Check Your Email 🙃";
                } else {
                    console.error('Failed to send email');
                    button.textContent = "Error 😞";
                }
            })
            .catch(error => {
                // Handle network errors or other issues
                console.error('Error:', error);
                button.textContent = "Error 😞";
            });
    }
});

// Function to draw text with line breaks
function drawTextWithLineBreaks(lines, x, y, fontSize, lineHeight) {
    lines.forEach((line, index) => {
        context.fillText(line, x, y + index * (fontSize + lineHeight));
    });
}

// Function to draw text with animation
function drawText() {
    const fontSize = Math.min(30, window.innerWidth / 24); // Adjust font size based on screen width
    const lineHeight = 8;

    context.font = `${fontSize}px Comic Sans MS`;
    context.textAlign = "center";
    
    // glow effect
    context.shadowColor = "#FF9494";
    context.shadowBlur = 8;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;

    // Fade-in and fade-out text effect
    if (frameNumber < 250) {
        context.fillStyle = `rgba(255, 148, 148, ${opacity})`;
        context.fillText("everyday day I cannot believe how lucky I am", canvas.width / 2, canvas.height / 2);
        opacity += 0.01;
    }

    if (frameNumber >= 250 && frameNumber < 500) {
        context.fillStyle = `rgba(255, 148, 148, ${opacity})`;
        context.fillText("everyday day I cannot believe how lucky I am", canvas.width / 2, canvas.height / 2);
        opacity -= 0.01;
    }

    if (frameNumber == 500) opacity = 0;

    if (frameNumber > 500 && frameNumber < 750) {
        context.fillStyle = `rgba(255, 148, 148, ${opacity})`;
        drawTextWithLineBreaks(["amongst trillions and trillions of stars,", "over billions of years"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        opacity += 0.01;
    }

    if (frameNumber >= 750 && frameNumber < 1000) {
        context.fillStyle = `rgba(255, 148, 148, ${opacity})`;
        drawTextWithLineBreaks(["amongst trillions and trillions of stars,", "over billions of years"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        opacity -= 0.01;
    }

    if (frameNumber == 1000) opacity = 0;

    if (frameNumber > 1000 && frameNumber < 1250) {
        context.fillStyle = `rgba(255, 148, 148, ${opacity})`;
        context.fillText("to be alive, and to get to spend this life with you", canvas.width / 2, canvas.height / 2);
        opacity += 0.01;
    }

    if (frameNumber >= 1250 && frameNumber < 1500) {
        context.fillStyle = `rgba(255, 148, 148, ${opacity})`;
        context.fillText("to be alive, and to get to spend this life with you", canvas.width / 2, canvas.height / 2);
        opacity -= 0.01;
    }

    if (frameNumber == 1500) opacity = 0;

    if (frameNumber > 1500 && frameNumber < 1750) {
        context.fillStyle = `rgba(255, 148, 148, ${opacity})`;
        context.fillText("You're Perfect In My Eyes", canvas.width / 2, canvas.height / 2);
        opacity += 0.01;
    }

    if (frameNumber >= 1750 && frameNumber < 2000) {
        context.fillStyle = `rgba(255, 148, 148, ${opacity})`;
        context.fillText("You're Perfect In My Eyes", canvas.width / 2, canvas.height / 2);
        opacity -= 0.01;
    }

    if (frameNumber == 2000) opacity = 0;

    if (frameNumber > 2000 && frameNumber < 2250) {
        context.fillStyle = `rgba(255, 148, 148, ${opacity})`;
        drawTextWithLineBreaks(["You're My Home, You're My Safe Place", "Thank You For Coming Into My Life"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        opacity += 0.01;
    }

    if (frameNumber >= 2250 && frameNumber < 2500) {
        context.fillStyle = `rgba(255, 148, 148, ${opacity})`;
        drawTextWithLineBreaks(["You're My Home, You're My Safe Place", "Thank You For Coming Into My Life"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        opacity -= 0.01;
    }

    if (frameNumber == 2500) opacity = 0;

    if (frameNumber > 2500 && frameNumber < 99999) {
        context.fillStyle = `rgba(255, 148, 148, ${opacity})`;
        drawTextWithLineBreaks(["I love you so much ken, yes you !", "all the time and space in the universe can contain"], canvas.width / 2, canvas.height / 2, fontSize, lineHeight);
        opacity += 0.01;
    }

    if (frameNumber >= 2750 && frameNumber < 99999) {
        context.fillStyle = `rgba(255, 148, 148, ${secondOpacity})`;
        drawTextWithLineBreaks(["and I can't wait to spend all the time in", "the world to share that love with you!"], canvas.width / 2, (canvas.height / 2 + 60), fontSize, lineHeight);
        secondOpacity += 0.01;
    }

    if (frameNumber >= 3000 && frameNumber < 99999) {
        context.fillStyle = `rgba(255, 148, 148, ${thirdOpacity})`;
        context.fillText("Pencet Tombol Nya Yhhh", canvas.width / 2, (canvas.height / 2 + 120));
        thirdOpacity += 0.01;
        button.style.display = "block";
    }

    // Reset the shadow effect after drawing the text
    context.shadowColor = "transparent";
    context.shadowBlur = 0;
    context.shadowOffsetX = 0;
    context.shadowOffsetY = 0;
}

// Main draw function
function draw() {
    context.putImageData(baseFrame, 0, 0);

    drawStars();
    updateStars();
    drawText();

    if (frameNumber < 99999) frameNumber++;
    window.requestAnimationFrame(draw);
}

// Handle window resize
window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    baseFrame = context.getImageData(0, 0, window.innerWidth, window.innerHeight);
});

// Start drawing
window.requestAnimationFrame(draw);
