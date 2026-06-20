import { store } from '../state/store.js'
import { fetchIPInfo } from '../api/ipify.js'

export function setupSearch() {
  const form = document.getElementById('search-form')
  const input = document.getElementById('search-input')

  if (!form || !input) return

  form.addEventListener('submit', async (e) => {
    e.preventDefault()

    const query = input.value.trim()
    if (!query) return

    store.setState({ loading: true, error: null })

    try {
      const data = await fetchIPInfo(query)
      store.setState({
        ip: data.ip,
        location: `${data.location.city}, ${data.location.country}`,
        timezone: data.location.timezone,
        isp: data.isp,
        lat: data.location.lat,
        lng: data.location.lng,
        loading: false
      })
    } catch (err) {
      store.setState({ loading: false, error: err.message })
    }
  })
}
