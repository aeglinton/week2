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

/*// This worked!
$.getJSON('https://dl.dropboxusercontent.com/u/8550761/wilson-library.geojson',function(data){
var geojson = new L.geoJson(data).addTo(map);
}); */
	
$('.geojson').click(function(e){
	$.getJSON('https://dl.dropboxusercontent.com/u/8550761/wilson-library.geojson',function(data){
		var geojson = new L.geoJson(data).addTo(map);
});});	
	
// Should alert when red box is clicked
$(".red.box").click(function(e){
	alert("Finally!");
});