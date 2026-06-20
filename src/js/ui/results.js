export function renderResults(state) {
  const ipEl = document.getElementById('result-ip')
  const locationEl = document.getElementById('result-location')
  const timezoneEl = document.getElementById('result-timezone')
  const ispEl = document.getElementById('result-isp')

  if (!ipEl) return

  if (state.loading) {
    ipEl.textContent = 'Loading...'
    locationEl.textContent = 'Loading...'
    timezoneEl.textContent = 'Loading...'
    ispEl.textContent = 'Loading...'
    return
  }

  if (state.error) {
    ipEl.textContent = state.error
    locationEl.textContent = '-'
    timezoneEl.textContent = '-'
    ispEl.textContent = '-'
    return
  }

  ipEl.textContent = state.ip || '-'
  locationEl.textContent = state.location || '-'
  timezoneEl.textContent = state.timezone || '-'
  ispEl.textContent = state.isp || '-'
}
