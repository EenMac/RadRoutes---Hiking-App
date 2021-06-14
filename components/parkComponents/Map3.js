import {map, tileLayer} from 'leaflet';
import {antPath} from 'leaflet-ant-path';
import latLngs from 'sample-polyline.json'; //This is a example, the JSON can come from any place

const path = antPath(route, {
  "delay": 400,
  "dashArray": [
    10,
    20
  ],
  "weight": 5,
  "color": "#0000FF",
  "pulseColor": "#FFFFFF",
  "paused": false,
  "reverse": false,
  "hardwareAccelerated": true
});
const myMap = map('map').setView([0, 0], 13);

tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

myMap.addLayer(path);
myMap.fitBounds(path.getBounds())