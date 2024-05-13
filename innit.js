let autoClickerInterval;
let autoClickerEnabled = false;

function startAutoClicker() {
    autoClickerEnabled = true;
    autoClickerInterval = setInterval(() => {
        document.querySelectorAll('.duck').forEach(duck => {
            duck.click();
        });
    }, 5000);
}

function stopAutoClicker() {
    clearInterval(autoClickerInterval);
    autoClickerEnabled = false;
}

// startAutoClicker();

// stopAutoClicker();
