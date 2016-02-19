var canvas = d3.select("body")
              .append("svg")
              .attr("width", 600)
              .attr("height", 600);

var circle = canvas.append("circle")
              .attr("cx", 250)
              .attr("cy", 250)
              .attr("r", 50)
              .attr("fill", "red");

var rect = canvas.append("rect")
            .attr("width", 250)
            .attr("height", 100);

var line = canvas.append("line")
            .attr("x1", 0)
            .attr("y1", 100)
            .attr("x2", 400)
            .attr("y2", 400)
            .attr("stroke", "blue")
            .attr("stroke-width", 5);