'use strict';

const reserveSelection = document.getElementById('reserve-selection');
const blueSelection = document.getElementById('river-selection-blue');
const whiteSelection = document.getElementById('river-selection-white');
const atbaraSelection = document.getElementById('river-selection-atbara');
const allSelection = document.getElementById('river-selection-all');

reserveSelection.addEventListener('change', handleReserveChange);
blueSelection.addEventListener('change', handleRiverChange);
whiteSelection.addEventListener('change', handleRiverChange);
atbaraSelection.addEventListener('change', handleRiverChange);
allSelection.addEventListener('change', handleRiverChange);

function handleReserveChange(event) {
    console.log(event.target.value);
}

function handleRiverChange(event) {
    console.log(event.target.value);
}