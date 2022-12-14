var map = L.map('map', {
  center: [40.7128, -74.0060],
  minZoom: 2,
  zoom: 10,
})

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: ['a', 'b', 'c'],
}).addTo(map)

var myURL = jQuery('script[src$="BikeMap.js"]')
  .attr('src')
  .replace('BikeMap.js', '')

var myIcon = L.icon({
  iconUrl: myURL + 'images/pin24.png',
  iconRetinaUrl: myURL + 'images/pin48.png',
  iconSize: [29, 24],
  iconAnchor: [9, 21],
  popupAnchor: [0, -14],
})

for (var i = 0; i < 30178; ++i) {
  L.markers([markers[i].lat,markers[i].lng])
    .bindPopup('<a href="' + markers[i].IFOADDRESS + '" target="_blank" rel="noopener">' + markers[i].ASSETSUBTY + '</a>' )
    
  .addTo(map)
}