var map = L.map('map-container');
// Sets map view and adds tiles
map.setView([44.971724, -93.243239], 16);
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	maxZoom: 18,
}).addTo(map);

/* // Should add geojson to map when button is clicked, stuck on this
$('.geojson').click(function() {
	$.getJSON("https://dl.dropboxusercontent.com/u/8550761/wilson-library.geojson", function(data) {
	var geojson = new L.geoJson(data);
	map.fitBounds(geojson.getBounds());
	geojson.addTo(map);
});}); */

// Trying geojson again, still not working
$.getJSON("https://dl.dropboxusercontent.com/u/8550761/wilson-library.geojson", function(data){
	new L.GeoJSON(data).addTo(map);
});
	
/* // Should alert when red box is clicked, stuck on this too
$(".red.box").click(function(e){
	alert("You clicked my red box.");
}); */

/* Copied this from someone and it didn't work
var boxclick = function() {
	alert("You clicked my red box!");
	
$(".red.box").click(boxclick);
}; */