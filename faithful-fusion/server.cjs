const fetch = require('node-fetch');
const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const API_KEY = process.env.TREFLE_API_KEY;
const app = express();

// allows our astro website to view the json from the server
app.use(cors());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})

console.log(`API_KEY = ${API_KEY}`);

// uses the trefle API to grab plant information
async function getPlantData(plantName) {
  try {
    const response = await axios.get(`https://trefle.io/api/v1/genus?token=${API_KEY}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching plant data:', error.message);
    throw error;
  }
}

getPlantData('rose')
  .then(data => {
    console.log("plant data:", data);
  })
  .catch(error => {
    console.error("error:", error.message);
  });