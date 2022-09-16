'use strict';

window.addEventListener('load', () => {
    const blueSelection = document.getElementById('river-selection-blue');
    const whiteSelection = document.getElementById('river-selection-white');
    const atbaraSelection = document.getElementById('river-selection-atbara');
    const allSelection = document.getElementById('river-selection-all');
    const reserveSelection = document.getElementById('reserve-selection');
    const reserveSelectionDetails = document.getElementById('reserve-selection-details');

    blueSelection.addEventListener('change', handleRiverChange);
    whiteSelection.addEventListener('change', handleRiverChange);
    atbaraSelection.addEventListener('change', handleRiverChange);
    allSelection.addEventListener('change', handleRiverChange);
    reserveSelection.addEventListener('change', handleReserveChange);
    
    let river = 'all';
    let reserve = '30';
    
    function handleReserveChange(event) {
        reserve = event.target.value;
        reserveSelectionDetails.innerHTML = reserve;
    }

    function handleRiverChange(event) {
        river = event.target.value;
    }
    
    function setDefaults() {
        reserveSelection.value = reserve;
        allSelection.checked = true;
        reserveSelectionDetails.innerHTML = reserve;
        renderRiverVolume();
    }
    
    function renderRiverVolume() {
        // set the dimensions and margins of the graph
        const margin = {top: 30, right: 30, bottom: 70, left: 60},
            width = 460 - margin.left - margin.right,
            height = 400 - margin.top - margin.bottom;

        // append the svg object to the body of the page
        const svg = d3.select("#fill-rate")
          .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
          .append("g")
            .attr("transform", `translate(${margin.left},${margin.top})`);

        // Parse the Data
        d3.csv("data/all.csv").then( function(data) {
            // X axis
            const x = d3.scaleBand()
              .range([ 0, width ])
              .domain(data.map(d => d.Month))
              .padding(0.2);
            svg.append("g")
              .attr("transform", `translate(0, ${height})`)
              .call(d3.axisBottom(x))
              .selectAll("text")
                .attr("transform", "translate(-10,0)rotate(-45)")
                .style("text-anchor", "end");

            // Add Y axis
            const y = d3.scaleLinear()
              .domain([0, 13000])
              .range([ height, 0]);
            svg.append("g")
              .call(d3.axisLeft(y));

            // Bars
            svg.selectAll("mybar")
              .data(data)
              .join("rect")
                .attr("x", d => x(d.Month))
                .attr("y", d => y(d.Volume))
                .attr("width", x.bandwidth())
                .attr("height", d => height - y(d.Value))
                .attr("fill", "#69b3a2");
        });
    }
    
    setDefaults();
});