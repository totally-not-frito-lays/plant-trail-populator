import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';
import axios from 'axios';
import { config } from 'dotenv';

config();
const API_KEY = process.env.TREFLE_API_KEY;
const app = express();

// allows our astro website to view the json from the server
app.use(cors());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})

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

// getPlantData('rose')
//   .then(data => {
//     console.log("plant data:", data);
//   })
//   .catch(error => {
//     console.error("error:", error.message);
//   });

  // Create API Endpoint
  // Sample data
const jsonData = { message: 'Hello, world!' };
app.get('/api/data', (req, res) => {
  res.json(jsonData);
});