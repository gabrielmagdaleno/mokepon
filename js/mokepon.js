function startGame() {
    let playerPetButton = document.getElementById("pet-button");
    playerPetButton.addEventListener("click", selectPlayerPet);
}

function selectPlayerPet() {
    if (hipodoge.checked) {
        alert("Seleccionaste Hipodoge");
    } else if (capipepo.checked) {
        alert("Seleccionaste Capipepo");
    } else if (ratigueya.checked) {
        alert("Seleccionaste Ratigueya");
    } else {
        alert("Debes seleccionar una mascota");
    }
}

window.addEventListener("load", startGame);
