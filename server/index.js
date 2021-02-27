/* eslint-disable @typescript-eslint/no-var-requires */
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const { join } = require('path');
const history = require('connect-history-api-fallback');

const { port } = require('../config/env');

const app = express();
const morganMode = process.env.NODE_ENV === 'development' ? 'dev' : 'combined';

app.use(history());
app.use(helmet());
app.use(cors());
app.use(morgan(morganMode));

app.use(express.static(join(__dirname, '../dist/')));

app.listen(port, () => {
    console.log(`Production server running on port ${port}`);
});
