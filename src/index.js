const express = require('express');
const morgan = require('morgan');
const path = require('path');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;
const methodOverride = require('method-override');

const router = require('./routes');
const db = require('./config/db');

//connect to Database
db.connect();




//HTTP logger
app.use(morgan('combined'));

// Template engine
app.engine(
    'hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);

app.use(methodOverride('_method'));

app.use(express.static(path.join(__dirname, 'public')));

app.use(
    express.urlencoded({
        extended: true,

    }),
);
app.use(express.json());

app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'resource', 'views'));

router(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});