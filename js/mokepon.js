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
}

window.addEventListener("load", startGame);
