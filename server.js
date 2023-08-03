
// sets up our paths to our routes
const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const routes = require('./controllers');
// sets up our helpers
const helpers = require('./utils/helpers');

// sets up our database connection
const sequelize = require('./config/connection');
const app = express();

const SequelizeStore = require('connect-session-sequelize')(session.Store);
var port = process.env.PORT || 3001;
/* db.sequelize.sync().then(function() {
    app.listen(port, function() {
        console.log("App listening on PORT " + port);
    })});
 */
const hbs = exphbs.create({ helpers });
// sets up our session
const sess = {
    secret: 'Supersecretsecret',
    cookie: {},
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
    }),
};

app.use(session(sess));
// sets up our handlebars engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
// sets up our middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false })); 
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);


/* sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  }); */