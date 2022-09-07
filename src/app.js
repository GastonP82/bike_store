const express = require('express');
const path = require('path');
const methodOverride =  require('method-override');
const cors = require('cors');
// Requerir las rutas 
const mainRoutes = require("./routes/main");
const productsRoutes = require('./routes/products');
const usersRoutes = require('./routes/users'); 
const apisproductsRoutes = require('./routes/apis/products'); 
const apisusersRoutes = require('./routes/apis/users'); 
const apiscategoryRoutes = require('./routes/apis/category'); 

const app = express();
app.use(express.urlencoded({ extended: false }));

// view engine setup para usar ejs//
app.set ('views', path.resolve(__dirname,'../views'));
app.set('view engine','ejs');
app.use(express.static('public'));
app.use(cors());
// Rutas vinculadas 
app.use('/', mainRoutes);
app.use('/products', productsRoutes);
app.use('/users', usersRoutes);
app.use('/apis/products', apisproductsRoutes);
app.use('/apis/users', apisusersRoutes);
app.use('/apis/category', apiscategoryRoutes);

//Levantar el servidor
const port = process.env.PORT || 3001;
app.listen(port, () => {
    console.log('servidor iniciado en el puerto: ' + port)
});

module.exports = app;










