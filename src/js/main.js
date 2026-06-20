import '../css/style.css'

import { store } from './state/store.js'
import { fetchIPInfo } from './api/ipify.js'
import { initMap, updateMap } from './map/init.js'
import { setupSearch } from './ui/search.js'
import { renderResults } from './ui/results.js'

async function init() {
  store.subscribe(renderResults)
  store.subscribe((state) => {
    if (state.lat && state.lng) {
      updateMap(state.lat, state.lng)
    }
  })

  initMap('map')

  setupSearch()

  store.setState({ loading: true })

  try {
    const data = await fetchIPInfo()
    store.setState({
      ip: data.ip,
      location: `${data.location.city}, ${data.location.country}`,
      timezone: data.location.timezone,
      isp: data.isp,
      lat: data.location.lat,
      lng: data.location.lng,
      loading: false
    })
  } catch {
    store.setState({ loading: false, error: 'Failed to load your IP information.' })
  }
}

init()
