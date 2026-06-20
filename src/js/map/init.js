import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

let map = null
let marker = null

export function initMap(containerId) {
  const container = document.getElementById(containerId)
  if (!container) return

  map = L.map(containerId).setView([51.505, -0.09], 13)

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map)

  setTimeout(() => map.invalidateSize(), 100)

  marker = L.marker([51.505, -0.09]).addTo(map)
}

export function updateMap(lat, lng) {
  if (!map) return

  map.setView([lat, lng], 13)

  if (marker) {
    marker.setLatLng([lat, lng])
  } else {
    marker = L.marker([lat, lng]).addTo(map)
  }
}
