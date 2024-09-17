const express = require('express');

const mongodb = require('./mongodb'); // if I need anything from the databse, export the function from aforementioned file first

mongodb.dbInit().catch(console.error);;

const app = express();

const port = 3000


app.use('/', require('./routes'));

app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
});

app.listen(process.env.PORT || port, () => {
    console.log('Web Server is listening at port ' + (process.env.PORT || port));
});