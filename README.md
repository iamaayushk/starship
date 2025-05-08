# Star Wars Starship Explorer

A React application built with Vite that displays Star Wars starship data fetched from the Star Wars API (SWAPI). The app allows users to browse, search, compare, and filter starships from the Star Wars universe.

## Features

- Browse a paginated list of Star Wars starships with key details.
- Search starships by name or other attributes.
- Compare multiple starships side-by-side.
- Filter starships based on various criteria.
- Responsive and user-friendly interface with smooth navigation.

## Technologies Used

- React
- Vite
- React Router DOM for client-side routing
- React Table for data display and pagination
- Axios for API requests
- SWAPI (Star Wars API) as the data source
- Tailwind CSS for styling

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/iamaayushk/spaceship
   cd star-wars
   ```

2. Install dependencies using npm or yarn:

   ```bash
   npm install
   # or
   yarn install
   ```

## Running the App

Start the development server:

```bash
npm run dev
# or
yarn dev
```

Open your browser and navigate to `http://localhost:3000` (or the port shown in the terminal) to view the app.

## Project Structure

- `src/` - Source code directory
  - `api/` - API related components and data fetching (e.g., StarshipTable)
  - `components/` - Reusable React components (Navbar, Hero, SearchBar, etc.)
  - `pages/` - Page components for routing (Home, Search, Compare, Filter)
  - `assets/` - Static assets like images and icons
- `public/` - Public files served directly
- `vite.config.js` - Vite configuration file
- `package.json` - Project metadata and dependencies

## API

This project uses the [Star Wars API (SWAPI)](https://swapi.dev/) to fetch starship data. The data is paginated and displayed in a table with navigation controls.

## License

Copyright (c) 2025 Aayush Kumar Singh


