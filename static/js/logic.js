// Creating map object
var myMap = L.map("map", {
    center: [36.77, -90.4179],
    zoom: 5
  });
  
  // Adding tile layer
  L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
    tileSize: 512,
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
  }).addTo(myMap);

  // Use this link to get the geojson data.
var link = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";

// Function that will determine the color of a neighborhood based on the borough it belongs to
function chooseColor(magnitude) {
  switch (true) {
  case magnitude > 5:
    return "red";
  case magnitude > 4:
    return "orange";
  case magnitude > 3:
    return "yellow";
  case magnitude > 2:
    return "green";
  case magnitude > 5:
    return "blue";
  default:
    return "purple";
  }
}

// Define function of circle radius based on magnitude
function radiusSize(magnitude) {
  return magnitude * 2000;
}

// Grabbing our GeoJSON data..
d3.json(link).then(function(data) {
  L.geoJson(data, {
    pointtolayer: function(feature, latlng) {
      return L.circleMarker(latlng, {
        radius: radiusSize(feature.properties.magnitude),
        color: chooseColor(feature.properties.magnitude),
        fillOpacity: 0.5,
      });
  },
  // Called on each feature
  onEachFeature: function(feature, layer) {
    // Set mouse events to change map styling
    layer.on({
    });
  // Create a GeoJSON layer with the retrieved data
    layer.bindPopup("<h1> Location: " + feature.properties.place + "</h1> <hr> <h2> Magnitude: " + feature.properties.mag + "</h2>");
  
    },
}).addTo(myMap);

  // Set up legend
  var legend = L.control({position: 'bottomright'});

  legend.onAdd = function() {

    var div = L.DomUtil.create('div', 'info legend'),
    magnitudeLevels = [0, 1, 2, 3, 4, 5];

    div.innerHTML += "<h3>Magnitude</h3>"

    // loop through our density intervals and generate a label with a colored square for each interval
    for (var i = 0; i < magnitudeLevels.length; i++) {
        div.innerHTML +=
            '<i style="background:' + chooseColor(magnitudeLevels[i] + 1) + '"></i> ' +
            magnitudeLevels[i] + (magnitudeLevels[i + 1] ? '&ndash;' + magnitudeLevels[i + 1] + '<br>' : '+');
    }
    return div;
  };

  // Add legend to map
  legend.addTo(myMap);
});
