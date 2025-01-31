let clicks = 0;

function revealMessage() {
    clicks++;
    if (clicks === 1) {
        document.getElementById('message').textContent = "Keep going...";
    } else if (clicks === 3) {
        document.getElementById('message').textContent = "You're getting warmer!";
    } else if (clicks === 5) {
        document.getElementById('message').textContent = "Check the console (F12)";
        console.log("Looking for something? Try base64: ezN3bGNvbTNfdDBfdGgzX2owdXJuM3l9");
    }
}