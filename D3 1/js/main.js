/*
*    main.js
*/
//Chart Area
var svg = d3.select("#chart-area").append("svg")
	.attr("width", 400)
	.attr("height", 400);

//Adding Charts
var circle = svg.append("circle")
	.attr("cx", 100)
	.attr("cy", 250)
	.attr("r", 50)
	.attr("fill", "pink");

var rect = svg.append("rect")
	.attr("x", 20)
	.attr("y", 20)
	.attr("width", 200)
	.attr("height", 200)
	.attr("fill","cyan");


    var star = svg.append("polygon")
	.attr("points", "50, 110 55, 130 70, 130 60, 140 65, 155 50, 145 35, 155 40, 140 30, 130 45, 130")
	.attr("width", 500)
	.attr("height", 500)
    .attr("stroke","black") 
	.attr("fill","#FFFF00");    