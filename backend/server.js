const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.get('/api/data', (req, res) => {
    const data = [
      { _id: 1, name: 'Data 1' },
      { _id: 2, name: 'Data 2' },
      { _id: 3, name: 'Data 3' },
    ];
  
    res.json(data);
  });
  

// Add your routes here

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
