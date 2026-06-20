const API_BASE = 'https://geo.ipify.org/api/v2/country,city'

export async function fetchIPInfo(ipOrDomain) {
  const apiKey = import.meta.env.VITE_IPIFY_API_KEY

  if (!apiKey || apiKey === 'your_ipify_api_key_here') {
    throw new Error('IPify API key not configured. Set VITE_IPIFY_API_KEY in .env')
  }

  const params = new URLSearchParams({ apiKey })

  if (ipOrDomain) {
    const isDomain = /^[a-zA-Z0-9][a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(ipOrDomain)
    params.set(isDomain ? 'domain' : 'ipAddress', ipOrDomain)
  }

  const url = `${API_BASE}?${params}`

  const response = await fetch(url)

  if (!response.ok) {
    const body = await response.json().catch(() => ({}))
    throw new Error(body.messages || `Request failed with status ${response.status}`)
  }

  return response.json()
}
