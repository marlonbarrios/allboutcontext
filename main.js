document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('animateWindowBtn');

    // Function to generate a random color
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Set initial random color for the button on page load
    button.style.backgroundColor = getRandomColor();

    // Event listener for button clicks to change the color and open new windows
    button.onclick = function() {
        // Change button color
        button.style.backgroundColor = getRandomColor();

        // Random start positions for the new window
        let startX = Math.floor(Math.random() * (window.screen.width - 200));
        let startY = Math.floor(Math.random() * (window.screen.height - 200));

        // Generate a random color for the background of the new window
        let bgColor = getRandomColor();

        // Open a new window at a random position
        let newWindow = window.open("", "_blank", `width=400,height=400,left=${startX},top=${startY}`);

        // HTML and CSS for the window's content
        newWindow.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>meaning</title>
        <style>
            body { 
                margin: 0; 
                overflow: hidden; 
                background-color: ${bgColor};
                display: flex;
                align-items: center; 
                justify-content: center; 
                height: 100vh;
            }
            @keyframes blink {
                0%, 100% { opacity: 1; }
                50% { opacity: 0; }
            }
            h1 {
                font-size: 2em;
                color: white;
                font-family: Arial, sans-serif;
                animation: blink 1s infinite;
            }
        </style>
    </head>
    <body>
        <h1>It is all about context</h1>
    </body>
    </html>
`);
newWindow.document.close();


        // Define initial velocities and the movement function
        let vx = Math.random() * 10 - 5; // Random velocity between -5 and 5
        let vy = Math.random() * 10 - 5; // Random velocity between -5 and 5

        // Function to animate the window
        function animateWindow() {
            startX += vx;
            startY += vy;

            // Check screen boundaries and reverse direction if hit
            if (startX < 0 || startX > window.screen.width - 400) {
                vx = -vx;
            }
            if (startY < 0 || startY > window.screen.height - 400) {
                vy = -vy;
            }

            // Move the window to the new position
            try {
                newWindow.moveTo(startX, startY);
                newWindow.focus();
            } catch (e) {
                console.log("Error moving window: ", e);
            }
        }

        // Start the animation, updating position every 50 ms
        setInterval(animateWindow, 50);
    };
});
