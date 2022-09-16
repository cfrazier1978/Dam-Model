# Analysis
<div id="analysis">
    <div id="controls">
        <div>
            <span>River Selection:</span>
            <br />
            <input id="river-selection-blue" name="river-selection" value="blue" type="radio" class="radio">
            <label for="river-selection-blue">Blue Nile</label>
            <br />
            <input id="river-selection-white" name="river-selection" value="white" type="radio" class="radio">
            <label for="river-selection-white">White Nile</label>
            <br />
            <input id="river-selection-atbara" name="river-selection" value="atbara" type="radio" class="radio">
            <label for="river-selection-atbara">Atbara</label>
            <br />
            <input id="river-selection-all" name="river-selection" value="all" type="radio" class="radio">
            <label for="river-selection-all">All Rivers</label>
        </div>
        <div>
            <label for="reserve-selection">Reserve Percentage (current: <span id="reserve-selection-details"></span>):</label>
            <input id="reserve-selection" type="range" min="0" max="100" step="10" class="slider">
            <br />
            <br />
            <div>
                <input type="button" id="run-simulation" class="button" value="Run Simulation">
            </div>
        </div>
    </div>
    <div id="plots">
        <div id="river-flow-rate"></div>
        <div id="reservoir-level"></div>
    </div>
</div>