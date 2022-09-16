'use strict';

const reserveSelection = document.getElementById('reserve-selection');
const riverSelection = document.getElementByName('river-selection');
reserveSelection.addEventListener('change', handleReserveChange);
riverSelection.addEventListener('change', handleRiverChange);

function handleReserveChange(event) {
    console.log(event.target.value);
}

function handleRiverChange(event) {
    console.log(event.target.value);
}