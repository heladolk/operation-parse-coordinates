var fs  = require("fs");
var map = fs.readFileSync("data/map-11.txt").toString(); 
//console.log(map);
//console.log(map.length);

var coordinateX, coordinateY; 

// convert map string to map array
mapArray = map.split("\n");

// use slice to elimite the first and the last element of the array
mapArray = mapArray.slice(1, mapArray.length-1);
//console.log(mapArray);

// find the coordinates
for (var row = 0; row < mapArray.length; row++) {
	for (var col = 0; col < mapArray[row].length; col++) {
		if (mapArray[row][col] === "X") {
			coordinateX = col-1;
			coordinateY = -row;
		}
	}
}

console.log([coordinateX, coordinateY]);

