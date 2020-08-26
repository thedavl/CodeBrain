const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const problemRoutes = require('./api/routes/problems');
const userRoutes = require('./api/routes/users')

mongoose.connect(
    'mongodb+srv://BigCodeBrainAdmin:' + 
    process.env.MONGO_ATLAS_PW + 
    '@cluster0.x1ban.mongodb.net/Cluster0?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("access-control-allow-origin", "*");
    res.header(
      "access-control-allow-headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET, OPTIONS");
      return res.status(200).json();
    }
    next();
  }
);

app.get('/', (req, res, next) => {
    res.send('This is the backend for Hack 2020 - David, Andrea, Collin');
});

app.use('/problems', problemRoutes);
app.use('/user', userRoutes);

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    })
});

module.exports = app;