document.getElementById('animateWindowBtn').addEventListener('click', function() {
    const numberOfWindows = 5; // Number of windows to open

    for (let i = 0; i < numberOfWindows; i++) {
        // Random start positions
        let startX = Math.floor(Math.random() * (window.screen.width - 200));
        let startY = Math.floor(Math.random() * (window.screen.height - 200));

        // Open a new window at random position
        let newWindow = window.open("", "_blank", `width=400,height=400,left=${startX},top=${startY}`);

        // HTML and CSS for the window content
        newWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>Animated Window ${i+1}</title>
                <style>
                    body { 
                        margin: 0; 
                        overflow: hidden; 
                        background-color: #fff; 
                        display: flex; 
                        align-items: center; 
                        justify-content: center; 
                        height: 100vh;
                    }
                    @keyframes blink { 
                        50% { color: transparent; }
                    }
                    h3 {
                      
                        color: black; 
                        animation: blink 1s step-end infinite;
                        font-family: Arial, sans-serif;
                        margin: 0;
                        padding: 0;
                    }
                </style>
            </head>
            <body>
                <h3>It is all about context</h3>
            </body>
            </html>
        `);
        newWindow.document.close();

        // Define velocity components for movement
        let vx = 5 - Math.random() * 10; // Velocity in X direction
        let vy = 5 - Math.random() * 10; // Velocity in Y direction

        // Function to animate the window
        function animateWindow() {
            startX += vx;
            startY += vy;

            // Check screen boundaries and reverse direction if hit
            if (startX < 0 || startX > window.screen.width - 200) {
                vx = -vx;
            }
            if (startY < 0 || startY > window.screen.height - 200) {
                vy = -vy;
            }

            // Move the window to the new position
            try {
                newWindow.moveTo(startX, startY);
                newWindow.focus();
            } catch (e) {
                console.log("Error moving window: ", e);
            }

            // Repeat every 50 ms
            setTimeout(animateWindow, 50);
        }

        // Start the animation
        animateWindow();
    }
});
