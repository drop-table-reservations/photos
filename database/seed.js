const mongoose = require('mongoose');
const faker = require('faker');
const restaurantInfo = require('../restaurants.js');

mongoose.connect('mongodb://nguyend08:hrsf101@ds211143.mlab.com:11143/photos');

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

// this adds our mock 100 restaurants info into our DB
const restaurantLength = restaurantInfo.restaurantObj.restaurants.length;
for (let i = 0; i < restaurantLength; i += 1) {
  const restaurantId = restaurantInfo.restaurantObj.restaurants[i].id;
  const restaurantName = restaurantInfo.restaurantObj.restaurants[i].name;

  const restaurant = {
    _id: restaurantId,
    name: restaurantName,
    photos: [],
  };

  // this helps to randomize the amount/type of photos per restaurant, then adds into photos array
  const randomAmountOfPhotos = Math.ceil(Math.random() * (15 - 5) + 5);
  for (let y = 0; y < randomAmountOfPhotos; y += 1) {
    const randomPhotoNumber = Math.floor(Math.random() * 80);
    const photo = {
      id: y,
      publisherName: faker.name.findName(),
      description: faker.lorem.words(),
      url: `https://s3-us-west-1.amazonaws.com/hrsf101-food-photos/food-images/food-image-${randomPhotoNumber}.jpg`,
      date: faker.date.between('2005-01-01', '2018-09-22'),
    };
    restaurant.photos.push(photo);
  }

  // saves each new restaurant the DB
  const newRestaurant = new Restaurant(restaurant);
  newRestaurant.save((err) => {
    if (err) {
      console.log(`ERROR IN SAVE RESTAURANT ${err}`);
    }
  });
}


module.exports.Restaurant = Restaurant;
