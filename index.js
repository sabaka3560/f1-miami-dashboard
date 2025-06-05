// index.js - Main Server File
const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Set view engine and static files
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('index', { 
    title: 'F1 Miami Command Center',
    currentPage: 'home'
  });
});

app.get('/about', (req, res) => {
  res.render('about', { 
    title: 'About - F1 Miami Dashboard',
    currentPage: 'about'
  });
});

// Dashboard Routes
app.get('/dashboard/drivers', async (req, res) => {
  try {
    // Fetch current season drivers from Ergast API
    const response = await axios.get('http://api.jolpi.ca/ergast/f1/current/drivers.json');
    const drivers = response.data.MRData.DriverTable.Drivers;
    
    res.render('dashboards/drivers', { 
      title: 'Drivers Dashboard - F1 Miami',
      currentPage: 'drivers',
      drivers: drivers
    });
  } catch (error) {
    console.error('Error fetching drivers:', error.message);
    res.render('dashboards/drivers', { 
      title: 'Drivers Dashboard - F1 Miami',
      currentPage: 'drivers',
      drivers: [],
      error: 'Unable to fetch driver data'
    });
  }
});

app.get('/dashboard/circuits', async (req, res) => {
  try {
    // Fetch current season circuits
    const response = await axios.get('http://api.jolpi.ca/ergast/f1/current/circuits.json');
    const circuits = response.data.MRData.CircuitTable.Circuits;
    
    res.render('dashboards/circuits', { 
      title: 'Circuits Dashboard - F1 Miami',
      currentPage: 'circuits',
      circuits: circuits
    });
  } catch (error) {
    console.error('Error fetching circuits:', error.message);
    res.render('dashboards/circuits', { 
      title: 'Circuits Dashboard - F1 Miami',
      currentPage: 'circuits',
      circuits: [],
      error: 'Unable to fetch circuit data'
    });
  }
});

app.get('/dashboard/standings', async (req, res) => {
  try {
    // Fetch current driver standings
    const response = await axios.get('http://api.jolpi.ca/ergast/f1/current/driverStandings.json');
    const standings = response.data.MRData.StandingsTable.StandingsLists[0]?.DriverStandings || [];
    
    res.render('dashboards/standings', { 
      title: 'Standings Dashboard - F1 Miami',
      currentPage: 'standings',
      standings: standings
    });
  } catch (error) {
    console.error('Error fetching standings:', error.message);
    res.render('dashboards/standings', { 
      title: 'Standings Dashboard - F1 Miami',
      currentPage: 'standings',
      standings: [],
      error: 'Unable to fetch standings data'
    });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`🏁 F1 Miami Dashboard running on http://localhost:${PORT}`);
  console.log('🌴 Ready to serve some Miami neon vibes!');
});

