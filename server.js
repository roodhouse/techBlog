const express        = require('express');
const session        = require('express-session');
const routes         = require('./controllers');
const sequelize      = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize');
const exhbs          = require('express-handlebars');
const path           = require('path');

const app  = express();
const PORT = process.env.PORT || 3001;
const hbs  = exhbs.create();
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(express.json());
app.use(express.urlencoded({ extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
})



// Server or app.js
// <Route path='/' component=Homepage>
// <Route path='/login' component=Login>


//Components or pages
/*
const Homepage() {
    return (
        <div> This is my HomePage</div>
    )
}
*/
