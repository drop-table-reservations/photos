const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/DropTablePhotos');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'));
db.once('open', () => {
  console.log('CONNECTED TO DATABASE!');
});


// Schema for photos
const photosSchema = new mongoose.Schema({
  id: Number,
  publisherName: String,
  description: String,
  url: String,
  date: String,
});

// Schema for restaurants
const restaurantsSchema = new mongoose.Schema({
  _id: Number,
  name: String,
  photos: [photosSchema],
});

// model to create new documents of Restaurants
const Restaurant = mongoose.model('Restaurant', restaurantsSchema);

module.exports.Restaurant = Restaurant;



