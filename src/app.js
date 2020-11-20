const bodyParser = require('body-parser')
const morgan = require('morgan');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

const userRoutes = require('./routes/users');

mongoose.connect('mongodb://localhost/rest-api', {
    useUnifiedTopology: true,
    useNewUrlParser: true
}) .then(db => console.log('BD conectada'))
   .catch(err => console.log(err));

//Configuracion
app.set('port',process.env.PORT || 3000);

//Middleware 
app.use(morgan('dev'));
app.use(bodyParser.json());

//routes
app.use('/users', userRoutes);

//static files 

//error handlers
//Inicia servidor
app.listen(app.get('port') , () => {
    console.log('Servidor en puerto ' , app.get('port'));
});