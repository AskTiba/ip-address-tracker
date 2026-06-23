# IP Address Tracker

![IP Address Tracker preview](./preview.jpg)

A fully responsive IP address and domain geolocation tracker. Enter any IP address or domain to see its location on an interactive map, along with key information including ISP, timezone, and coordinates.

Built as a solution to the [Frontend Mentor IP Address Tracker challenge](https://www.frontendmentor.io/challenges/ip-address-tracker-I8-0yYAH0).

## Features

- **IP Geolocation** — Fetches location data via the IPify Geolocation API
- **Interactive Map** — Renders a LeafletJS map with a draggable marker at the target coordinates
- **Search by IP or Domain** — Accepts both IPv4 addresses and domain names
- **Your IP on Load** — Automatically detects and displays your own public IP on page load
- **Fluid Responsive Design** — Scales seamlessly from 320px mobile to ultrawide desktop using CSS Grid, custom properties, and `clamp()` for fluid typography
- **Accessibility** — Semantic HTML landmarks, ARIA live regions for dynamic content, keyboard-navigable search
- **Loading & Error States** — Skeleton pulsing during fetch, user-friendly error messages on failure

## Built With

- **Build Tool** — [Vite](https://vitejs.dev/) (vanilla JS template)
- **JavaScript** — Vanilla ES modules with observable pub/sub state management
- **CSS** — Vanilla CSS with custom properties, CSS Grid, `clamp()` fluid typography
- **Maps** — [LeafletJS](https://leafletjs.com/) with OpenStreetMap tiles
- **API** — [IPify Geolocation API](https://geo.ipify.org/)

## Project Structure

```
src/
├── js/
│   ├── main.js              — App entry, bootstraps all modules
│   ├── state/
│   │   └── store.js          — Observable pub/sub state store
│   ├── api/
│   │   └── ipify.js          — IPify API client with error handling
│   ├── map/
│   │   └── init.js           — Leaflet map initialization and marker controls
│   └── ui/
│       ├── search.js         — Search form handler with validation
│       ├── results.js        — Dynamic results rendering with state-driven UI
│       └── map.js            — Map accessibility label updates
├── css/
│   └── style.css             — Responsive styles with custom properties
└── public/
    └── images/               — Static assets (icons, patterns, favicon)
```

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- An IPify API key (free — sign up at [geo.ipify.org](https://geo.ipify.org/signup))

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/ip-address-tracker.git
   cd ip-address-tracker
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the project root and add your IPify API key:
   ```env
   VITE_IPIFY_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open the URL shown in the terminal (default: `http://localhost:5173`)

### Production Build

```bash
npm run build
```

Outputs a static site to `dist/` — deployable to any static host (GitHub Pages, Netlify, Vercel, etc.).

### Troubleshooting

If CSS fails to load during development, clear the Vite cache and rebuild:

```bash
npm run dev:clean
```

## What I Learned

- Designing a clean observable state pattern in vanilla JS without a framework
- Handling asynchronous data flow with proper loading, error, and empty states
- Building fluid responsive layouts using `clamp()` and CSS Grid rather than fixed breakpoints
- Proper API key security with Vite's environment variable handling

## Roadmap

- [x] Vite scaffold and build tooling
- [x] Observable state store
- [x] IPify API integration
- [x] LeafletJS map integration
- [x] Search by IP or domain
- [x] Fluid responsive layout (320px–2560px)
- [ ] Deploy to GitHub Pages
- [ ] ESLint + Prettier configuration

## Author

- GitHub — [@AskTiba](https://github.com/AskTiba)
- Frontend Mentor — [@AskTiba](https://www.frontendmentor.io/profile/AskTiba)

## Acknowledgments

- Challenge design by [Frontend Mentor](https://www.frontendmentor.io)
- Map tiles by [OpenStreetMap](https://www.openstreetmap.org/copyright)
- Icons by [Lucide](https://lucide.dev)
