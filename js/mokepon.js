function startGame() {
    let playerPetButton = document.getElementById("pet-button");
    playerPetButton.addEventListener("click", selectPlayerPet);
}

function selectPlayerPet() {
    let inputHipodoge = document.getElementById("hipodoge");
    let inputCapipepo = document.getElementById("capipepo");
    let inputRatigueya = document.getElementById("ratigueya");

    if (inputHipodoge.checked) {
        alert("Seleccionaste Hipodoge");
    } else if (inputCapipepo.checked) {
        alert("Seleccionaste Capipepo");
    } else if (inputRatigueya.checked) {
        alert("Seleccionaste Ratigueya");
    } else {
        alert("Debes seleccionar una mascota");
    }
}

window.addEventListener("load", startGame);
