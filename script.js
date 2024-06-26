document.getElementById('startButton').addEventListener('click', function () {
    const gameContainer = document.getElementById('gameContainer');
    gameContainer.innerHTML = '';
    gameContainer.style.display = 'block';
    document.getElementById('gameOver').style.display = 'none';
    level = 1; // Reset the level when the game starts
    startGame(3);
    if (gameInterval) clearInterval(gameInterval);
    gameInterval = setInterval(() => {
        addDucks(2);
    }, 5000);
    startLevelInterval(); // Start the level interval
});

document.getElementById('howToButton').addEventListener('click', function () {
    window.location.href = 'rules';
});

let currentDucks = 0;
let gameInterval;
let level = 1;
let levelInterval;

function startGame(initialDucks) {
    currentDucks = initialDucks;
    for (let i = 0; i < initialDucks; i++) {
        createDuck();
    }
}

function addDucks(number) {
    currentDucks += number;
    for (let i = 0; i < number; i++) {
        createDuck();
    }
}

function createDuck() {
    const gameContainer = document.getElementById('gameContainer');
    const duck = document.createElement('img');
    duck.src = 'duck.png';
    duck.className = 'duck';
    duck.style.top = '0px';
    duck.style.left = `${Math.random() * (gameContainer.clientWidth - 50)}px`;
    gameContainer.appendChild(duck);

    let interval = setInterval(() => {
        let currentTop = parseInt(window.getComputedStyle(duck).getPropertyValue('top'));
        duck.style.top = `${currentTop + 20}px`;
        if (currentTop >= gameContainer.clientHeight - duck.clientHeight) {
            clearInterval(interval);
            duck.remove();
            currentDucks--;
            endGame();
        }
    }, 100);

    duck.addEventListener('click', function () {
        clearInterval(interval);
        duck.remove();
        currentDucks--;
        createDuck();
    });
}

function endGame() {
    clearInterval(gameInterval);
    clearInterval(levelInterval); // Clear the level interval when the game ends
    document.getElementById('gameContainer').style.display = 'none';
    document.getElementById('gameOver').style.display = 'block';
    document.querySelector('.gameOverText').textContent = 'Game Over! You reached level ' + level;
}

function startLevelInterval() {
    if (levelInterval) clearInterval(levelInterval);
    levelInterval = setInterval(() => {
        level++;
    }, 5000);
}
