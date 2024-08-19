const express = require('express');
const mongoose = require('mongoose');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 3000;

//connet to MongoDB
mongoose.connect(process.env.MONGO_URI)
.then(() => {console.log('Connected to MongoDB')})
.catch((err) => {console.log(`Error to connect db:- ${err}`)});


//views engines
app.set('view engine', 'ejs');
app.set('views', 'views');

//Middleware
app.use(express.static('public'));

//Start server
app.listen(PORT, () => {
    console.log(`Conneted to port:- ${PORT}`);
});