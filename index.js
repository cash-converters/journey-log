// Packages
const express = require('express');
const axios = require('axios');
const cors = require('cors');

// Main App
const app = express();

// Middlewares
app.use(express.static('public'));
app.use(cors());


// Main Route
app.get('/log', (req, res) => {
    res.send('Ruta de logueo');
});



// Server and Port
const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`Servidor arrancado en puerto ${port}`);
});