function startGame() {
    let playerPetButton = document.getElementById("pet-button");
    playerPetButton.addEventListener("click", selectPlayerPet);
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
    let randomAttack = random(1, 3);
    let spanEnemyPet = document.getElementById("petEnemyName");

    if (randomAttack == 1) {
        spanEnemyPet.innerHTML = "Hipodoge";
    } else if (randomAttack == 2) {
        spanEnemyPet.innerHTML = "Capipepo";
    } else {
        spanEnemyPet.innerHTML = "Ratigueya";
    }
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", startGame);
