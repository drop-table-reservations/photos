const express = require('express');

const app = express();

const bodyParser = require('body-parser');

const helperFunc = require('../database/helper.js');

app.use(express.static(`${__dirname}/../client/dist`));
app.use(express.static(`${__dirname}/../client/src/styles`));
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());


app.get('/', (req, res) => res.send('WE ARE CONNECTED!!'));

app.get('/restaurants/:restaurantId/photos', (req, res) => {
  helperFunc.getReviews(req.params.restaurantId, (err, data) => {
    if (err) return res.status(500).send(`UNABLE TO GET ${err}`);
    // data is returning an array of obj
    return res.status(200).send(data);
  });
});


const PORT = 3005;
app.listen(PORT, () => console.log(`LISTENING ON PORT ${PORT}`));
