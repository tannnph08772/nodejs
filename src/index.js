const express = require('express');
const morgan = require('morgan');
const path = require('path');
const handlebars = require('express-handlebars')
const app = express();
const port = 3000;



//HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine('hbs', handlebars({
    extname: '.hbs'
}));

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource', 'views'));

app.get('/', (req, res) => {
    res.render('home');
});

app.get('/', (req, res) => {
    res.render('home');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})