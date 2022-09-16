'use strict';

window.addEventListener('load', () => {
    const blueSelection = document.getElementById('river-selection-blue');
    const whiteSelection = document.getElementById('river-selection-white');
    const atbaraSelection = document.getElementById('river-selection-atbara');
    const allSelection = document.getElementById('river-selection-all');
    const reserveSelection = document.getElementById('reserve-selection');
    const riverVolume = document.getElementById('river-volume');
    const fillRate = document.getElementById('fill-rate');

    blueSelection.addEventListener('change', handleRiverChange);
    whiteSelection.addEventListener('change', handleRiverChange);
    atbaraSelection.addEventListener('change', handleRiverChange);
    allSelection.addEventListener('change', handleRiverChange);
    reserveSelection.addEventListener('change', handleReserveChange);
    
    let river = 'all';
    allSelection.checked = true;
    let reserve = null;
    reserveSelection.value = reserve;
    
    const handleReserveChange = (event) => {
        river = event.target.value;
        riverVolume.innerHTML = river;
    }

    const handleRiverChang = (event) => {
        reserve = Number(event.target.value);
        fillRate.innerHTML = reserve;
    }
});