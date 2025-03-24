const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let player = {
    x: 100,
    y: canvas.height / 2,
    width: 50,
    height: 50,
    color: "green",
    speed: 5
};

let zombies = [];
let zombieSpeed = 2;

// Simple player movement control
document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowUp") player.y -= player.speed;
    if (e.key === "ArrowDown") player.y += player.speed;
    if (e.key === "ArrowLeft") player.x -= player.speed;
    if (e.key === "ArrowRight") player.x += player.speed;
});

// Create zombies
function createZombie() {
    let zombie = {
        x: canvas.width,
        y: Math.random() * canvas.height,
        width: 40,
        height: 40,
        color: "red",
        speed: zombieSpeed
    };
    zombies.push(zombie);
}

// Update zombies position
function updateZombies() {
    for (let i = 0; i < zombies.length; i++) {
        zombies[i].x -= zombies[i].speed;

        if (zombies[i].x + zombies[i].width < 0) {
            zombies.splice(i, 1); // Remove zombie if it's off-screen
        }
    }
}

// Draw player
function drawPlayer() {
    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

// Draw zombies
function drawZombies() {
    for (let i = 0; i < zombies.length; i++) {
        ctx.fillStyle = zombies[i].color;
        ctx.fillRect(zombies[i].x, zombies[i].y, zombies[i].width, zombies[i].height);
    }
}

// Game loop function
function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    drawPlayer();
    drawZombies();
    updateZombies();

    requestAnimationFrame(gameLoop); // Loop the game
}

// Spawn zombies periodically
setInterval(createZombie, 2000); // Spawn a zombie every 2 seconds

gameLoop(); // Start the game loop
