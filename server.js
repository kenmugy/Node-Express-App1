const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const debug = require('debug')('app');
const path = require('path');

const app = express();
const port = process.env.PORT || '4000';

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(
  '/css',
  express.static(path.join(__dirname, '/node_modules/materialize-css/dist/css'))
);
app.use(
  '/js',
  express.static(path.join(__dirname, '/node_modules/jquery/dist'))
);
app.use(
  '/js',
  express.static(path.join(__dirname, '/node_modules/materialize-css/dist/js'))
);
app.set('views', './src/views');
app.set('view engine', 'ejs');

const navs = [
  {
    link: '/arts',
    title: 'Arts'
  },
  {
    link: '/animals',
    title: 'Animals'
  },
  {
    link: '/girls',
    title: 'Girls'
  },
  {
    link: '/others',
    title: 'Others'
  }
];
const animalRouter = require('./src/routes/animalRoutes')(navs);
const artRouter = require('./src/routes/artRoutes')(navs);
const girlRouter = require('./src/routes/girlRoutes')(navs);
const otherRouter = require('./src/routes/otherRoutes')(navs);

app.use('/animals', animalRouter);
app.use('/arts', artRouter);
app.use('/girls', girlRouter);
app.use('/others', otherRouter);
app.get('/', (req, res) => {
  res.render('index', {
    navs
  });
});

app.listen(port, () => debug(`listening on port ${chalk.green(port)}`));
