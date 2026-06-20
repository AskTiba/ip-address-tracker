import { store } from '../state/store.js'

export function setupMapUI() {
  store.subscribe((state) => {
    const container = document.getElementById('map')
    if (container && state.lat && state.lng) {
      container.setAttribute('aria-label', `Map showing location at ${state.location}`)
    }
  })
}
