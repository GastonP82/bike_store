const express = require('express');
const path = require('path');
const mainRoutes = require("./routes/main");
const userRoutes = require("./routes/users");

const app = express();
// view engine setup
app.set ('views', path.resolve(__dirname,'../views'));
app.set('view engine','ejs');

// MIDDLEWARE //
const userLogsMiddleware = require('./middlewares/userLogs');
/*const userLoggedMiddleware = require('./middlewares/userLoggedMiddleware');*/

app.use(session({
	secret: "Shhh, It's a secret",
	resave: false,
	saveUninitialized: false,
}));

app.use(cookies());

app.use(userLoggedMiddleware);

app.use(express.urlencoded({ extended: false }));
app.use('/', mainRoutes);
app.use('/users', userRoutes);

// ************************* MIDDLEWARES (DON'T TOUCH) **************************//
app.use(userLogsMiddleware);



app.use(express.static('public'));

app.use('/', mainRoutes);
app.set('views',path.resolve(__dirname,'./views'));

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log('servidor iniciado en el puerto: ' + port)
});


/**********************************************************/



app.use('/', mainRoutes);
app.use('/users', userRoutes);









