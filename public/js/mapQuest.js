function initMap() {
	// add your code here
	L.mapquest.key = 'soifxuWZMGjQVJuLpY00rGVctZ6e1thI';

	// 'map' referes to a <div> element with the id map
	var map = L.mapquest.map('map', {
		center: [32.88, -117.236],
		layers: L.mapquest.tileLayer('map'),
		zoom: 14,
		zoomControl: false
	});

	//Add a marker to the map
	L.marker([32.88, -117.236]).addTo(map);
}