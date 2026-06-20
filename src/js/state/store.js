function createStore(initialState = {}) {
  let state = { ...initialState }
  const subscribers = new Set()

  return {
    getState() {
      return state
    },
    setState(partial) {
      state = { ...state, ...partial }
      subscribers.forEach((fn) => fn(state))
    },
    subscribe(fn) {
      subscribers.add(fn)
      return () => subscribers.delete(fn)
    }
  }
}

export const store = createStore({
  ip: '',
  location: '',
  timezone: '',
  isp: '',
  lat: null,
  lng: null,
  loading: false,
  error: null
})
