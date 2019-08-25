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

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(port, () => debug(`listening on port ${chalk.green(port)}`));
