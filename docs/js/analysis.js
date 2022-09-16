'use strict';

window.addEventListener('load', () => {
    const blueSelection = document.getElementById('river-selection-blue');
    const whiteSelection = document.getElementById('river-selection-white');
    const atbaraSelection = document.getElementById('river-selection-atbara');
    const allSelection = document.getElementById('river-selection-all');
    const reserveSelection = document.getElementById('reserve-selection');
    const reserveSelectionDetails = document.getElementById('reserve-selection-details');
    const riverVolume = document.getElementById('river-volume');
    const fillRate = document.getElementById('fill-rate');

    blueSelection.addEventListener('change', handleRiverChange);
    whiteSelection.addEventListener('change', handleRiverChange);
    atbaraSelection.addEventListener('change', handleRiverChange);
    allSelection.addEventListener('change', handleRiverChange);
    reserveSelection.addEventListener('change', handleReserveChange);
    
    let river = 'all';
    let reserve = '30';
    
    function handleReserveChange(event) {
        reserve = event.target.value;
        fillRate.innerHTML = reserve;
    }

    function handleRiverChange(event) {
        river = event.target.value;
        riverVolume.innerHTML = river;
    }
    
    function setDefaults() {
        reserveSelection.value = reserve;
        allSelection.checked = true;
    }
    
    setDefaults();
});