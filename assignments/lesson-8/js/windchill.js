//var t = document.getElementById("temp").innerHTML;
//var s = document.getElementById("wind_speed").innerHTML;

var windchill = 35.74 + (0.6215 * 76) - (35.75 * (5 * 0.16)) + ((0.4275 * 76) * (5 * 0.16)); 
var f = windchill.toFixed(0);

document.write(f);


