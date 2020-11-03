// Part 1
// Generating an SVG

var svg = d3.select("svg")

svg.attr("width", "10000px").attr("height", "10000px");

// Part 2
// Binding the SVG to data

var circles = svg.selectAll("circle");

var rValues = [40, 25, 10];

circles.data(rValues)
    .enter()
    .append("circle")
    .attr("cx", 2015)
    .attr("cy", 450)
    .attr("r", function(d) {
      return d;
    })
    .attr("stroke", "black")
    .attr("stroke-width", "5")
    .attr("fill", "red");
// Part 1
// Generating an SVG
