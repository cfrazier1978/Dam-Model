# Analysis
<div class="controls">
    <label for="reserve-selection">Reservation Percentage</label><br>
    <input id="reserve-selection" type="range" min="0" max="100" step="10" value="30" list="tickmarks" class="slider">
    <datalist id="tickmarks">
        <option value="0"></option>
        <option value="10"></option>
        <option value="20"></option>
        <option value="30"></option>
        <option value="40"></option>
        <option value="50"></option>
        <option value="60"></option>
        <option value="70"></option>
        <option value="80"></option>
        <option value="90"></option>
        <option value="100"></option>
    </datalist>
    <br />
    <label for="river-selection">River Selection</label><br>
    <input id="river-selection" type="radio" class="radio">
    <br />
    <button id="update-button">Run Simulation</button>
</div>