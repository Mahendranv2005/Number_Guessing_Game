var submitbutton = document.getElementById("submit");
var live = document.getElementById("livesno");
var msg = document.getElementById("message");
var randomNumber = Math.floor(Math.random() * 100) + 1;  // Ensuring 1-100 range
var lives = 5;

submitbutton.onclick = () => {
    var userInput = parseInt(document.getElementById("number").value);
    
    if (isNaN(userInput) || userInput < 1 || userInput > 100) {
        msg.innerHTML = "⚠️ Please enter a number between 1 and 100!";
        msg.style.display = "block";
        return;
    }

    lives--;

    if (userInput === randomNumber) {
        location.href = "./win.html";
    } else if (lives === 0) {
        location.href = "./lose.html";
    } else {
        msg.innerHTML = userInput > randomNumber ? "🔻 Too High!" : "🔺 Too Low!";
        msg.style.display = "block";
        live.innerHTML = lives;
    }
};
