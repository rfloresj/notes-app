const express = require('express');

//  Initializations
const app = express();

//  Settings
app.set('port', process.env.PORT || 3000); // process.env.PORT nos indica que si existe un puerto libre en nuestra computadora, lo tome
// de lo contrario toma el 3000.

// Middlewares

// Global Variables

// Routes

// Routes

// Static Files

//  Server is listenning
app.listen(app.get('port'), () => {
    console.log('Server on port', app.get('port'));
});