import express from 'express';
import bodyParser from 'body-parser'

import quotesRoutes from './routes/quotes.js' 

const app = express ();
const PORT = 5000;
// const express = require('express');
app.use(bodyParser.json());

app.use('/quotes',quotesRoutes)
app.listen(PORT, () => 
    console.log('Server Listening on PORT: ', PORT)
  );
//   response.send(status) is now a function that takes the JSON object as the argument.


app.get('/', (req, res) => {
    // const status = { 
    //    "status": "running"
    // };
    
    res.send('hello');
 });

