# Analysis
<script type="module">
import * as d3 from "https://cdn.skypack.dev/d3@7";
</script>

<div class="controls">
    <p>
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
    </p>
    <p>
        <label for="reserve-selection">Reserve Percentage:</label>
        <input id="reserve-selection" type="range" min="0" max="100" step="10" value="30" class="slider">
    </p>
    <p>
        <input type="button" id="update-button" class="button" value="Run Simulation" onclick="something()">
    </p>
</div>