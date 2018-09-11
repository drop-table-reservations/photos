const express = require('express');
const app = express();
const helperFunc = require('../database/helper.js')
const bodyParser = require('body-parser');

app.use(express.static(__dirname + '/../client/dist'))
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())


app.get('/', (req,res) => res.send('WE ARE CONNECTED!!'))

app.get('/restaurants/:restaurantId/photos', (req, res) => {
    // console.log('THIS IS THE REQ.PARAMS===' + req.params.restaurantId)
    helperFunc.getRestaurantReviews(req.params.restaurantId, (err, data) => {
      if (err) return res.status(500).send('Error getting restaurant');
    //   console.log('THIS IS DATA======='+ data)
      //data is returning an array of obj
      return res.status(200).json(data);
    });
  });


const PORT = 3000;
app.listen(PORT, () => console.log(`LISTENING ON PORT ${PORT}`))

