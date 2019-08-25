const express = require('express');
const chalk = require('chalk');
const morgan = require('morgan');
const debug = require('debug')('app');
const path = require('path');

const app = express();
const port = process.env.PORT || '4000';

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(port, () => debug(`listening on port ${chalk.green(port)}`));
