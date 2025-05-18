# inst377-brewery: Brandon Nguyen

1. # Title: Public API Explorer: Brewery Search Tool

2. # Description of your project:

# Public API Explorer is a browser-based application that allows users to search, explore, and visualize brewery information using the Open Brewery DB API.

# It includes an intuitive interface for searching by keyword or city, viewing brewery type distributions via charts, and locating breweries on a map.

# This project demonstrates integrating and presenting public API data in a modern, responsive web experience.

3. # Description of target browsers (iOS? Android? Which ones?):

# Desktop Browsers: Latest versions of Chrome, Firefox, Safari, and Microsoft Edge

# Mobile Browsers: iOS Safari, Android Chrome (responsive layout supported)

4. # Link to Developer Manual: developer_manual.md

### Developer Manual

**Audience:** Future developers with general web development knowledge who are unfamiliar with the project’s system design.

This manual provides guidance on how to set up the project locally, understand its structure, and continue development.

---

## Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/your-username/public-api-explorer.git
   cd public-api-explorer

   ```

2. **Install dependencies (if you choose to serve via Node)**

   ```bash
   npm install

   ```

3. **Run a local server (pick one):**

Python:
```bash
python -m http.server 8000

    ```

Node:
```bash
npx serve .

    ```

# Then open your browser to http://localhost:8000/home.html

**API Endpoints**

# All data is fetched directly from the Open Brewery DB public API—no custom backend.

# GET /breweries/random

# Returns a single random brewery (used on the Home page).

# GET /breweries?per_page=5

# Returns the first 5 breweries (used on the About page).

# GET /breweries/search?query={term}

# Returns an array of breweries matching the search term (used on the Breweries page).

**Known Bugs**

# Some brewery objects lack latitude/longitude, so voice-search results without coords cannot be mapped.

# No pagination on search results (currently limited to the first 20 entries).

# Voice recognition (annyang) may not work on all browsers/devices.

**Roadmap**

# Add pagination and filtering by brewery type or state.

# Implement favourites: allow users to save breweries (requires a backend).

# Automated testing: add Jest tests for fetch handlers and UI logic.

# Accessibility improvements: integrate ARIA labels, keyboard controls.

# CI/CD & deployment: automate builds and deploy to Vercel with custom domain.
