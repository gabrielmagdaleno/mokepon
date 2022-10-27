let playerAttack;
let enemyAttack;

function startGame() {
    let playerPetButton = document.getElementById("pet-button");
    playerPetButton.addEventListener("click", selectPlayerPet);

    let fireButton = document.getElementById("fire-button");
    fireButton.addEventListener("click", fireAttack);
    let waterButton = document.getElementById("water-button");
    waterButton.addEventListener("click", waterAttack);
    let earthButton = document.getElementById("earth-button");
    earthButton.addEventListener("click", earthAttack);
}

function selectPlayerPet() {
    let inputHipodoge = document.getElementById("hipodoge");
    let inputCapipepo = document.getElementById("capipepo");
    let inputRatigueya = document.getElementById("ratigueya");
    let spanPetPlayer = document.getElementById("petPlayerName");

    if (inputHipodoge.checked) {
        spanPetPlayer.innerHTML = "Hipodoge";
    } else if (inputCapipepo.checked) {
        spanPetPlayer.innerHTML = "Capipepo";
    } else if (inputRatigueya.checked) {
        spanPetPlayer.innerHTML = "Ratigueya";
    } else {
        alert("Debes seleccionar una mascota");
    }

    selectEnemyPet();
}

function selectEnemyPet() {
    let randomPet = random(1, 3);
    let spanEnemyPet = document.getElementById("petEnemyName");

    if (randomPet == 1) {
        spanEnemyPet.innerHTML = "Hipodoge";
    } else if (randomPet == 2) {
        spanEnemyPet.innerHTML = "Capipepo";
    } else {
        spanEnemyPet.innerHTML = "Ratigueya";
    }
}

function fireAttack() {
    playerAttack = "FUEGO";
    enemyRandomAttack();
}
function waterAttack() {
    playerAttack = "AGUA";
    enemyRandomAttack();
}
function earthAttack() {
    playerAttack = "TIERRA";
    enemyRandomAttack();
}

function enemyRandomAttack() {
    let randomAttack = random(1, 3);

    if (randomAttack == 1) {
        enemyAttack = "FUEGO";
    } else if (randomAttack == 2) {
        enemyAttack = "AGUA";
    } else {
        enemyAttack = "TIERRA";
    }

    createMessage();
}

function createMessage() {
    let sentenceSection = document.getElementById("messages");

    let sentence = document.createElement("p");
    sentence.innerHTML =
        "Tu mascota atacó con " +
        playerAttack +
        " , la mascota del enemigo atacó con " +
        enemyAttack +
        " - PENDIENTE";

    sentenceSection.appendChild(sentence);
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", startGame);
