'use strict';

import * as d3 from "https://cdn.skypack.dev/d3@7";

const blueSelection = document.getElementById('river-selection-blue');
const whiteSelection = document.getElementById('river-selection-white');
const atbaraSelection = document.getElementById('river-selection-atbara');
const allSelection = document.getElementById('river-selection-all');
const reserveSelection = document.getElementById('reserve-selection');

blueSelection.addEventListener('change', handleRiverChange);
whiteSelection.addEventListener('change', handleRiverChange);
atbaraSelection.addEventListener('change', handleRiverChange);
allSelection.addEventListener('change', handleRiverChange);
reserveSelection.addEventListener('change', handleReserveChange);

function handleReserveChange(event) {
    console.log(event.target.value);
}

function handleRiverChange(event) {
    console.log(event.target.value);
}

console.log("D3:", d3);