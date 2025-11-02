// Single function to load any game
function loadGame(gameName, gameUrl) {
    document.getElementById('gameFrame').src = gameUrl;
    document.getElementById('gameTitle').textContent = gameName;
    document.getElementById('gamePlayer').style.display = 'block';
    document.getElementById('gamePlayer').scrollIntoView({ behavior: 'smooth' });
}

function closeGame() {
    document.getElementById('gameFrame').src = '';
    document.getElementById('gamePlayer').style.display = 'none';
}

function fullscreenGame() {
    const iframe = document.getElementById('gameFrame');
    if (iframe.requestFullscreen) {
        iframe.requestFullscreen();
    } else if (iframe.mozRequestFullScreen) {
        iframe.mozRequestFullScreen();
    } else if (iframe.webkitRequestFullscreen) {
        iframe.webkitRequestfullscreen();
    } else if (iframe.msRequestFullscreen) {
        iframe.msRequestFullscreen();
    }
}

// Add click event listeners to all play buttons for better UX
document.addEventListener('DOMContentLoaded', function() {
    const playButtons = document.querySelectorAll('.play-btn');
    playButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent triggering the card click event
            const card = this.closest('.game-card');
            card.click(); // Trigger the card's click event
        });
    });
});