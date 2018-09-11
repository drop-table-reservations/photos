const { Restaurant } = require('./index.js')


const getRestaurantReviews = (id, callback) => {
    Restaurant.findById(id, (err, data) => {
      if (err) callback(err, null);
      console.log('THIS IS THE RESTAURANT=====' + data)
      callback(null, DataTransferItem.photos);
    });
  };

  module.exports.getRestaurantReviews = getRestaurantReviews;

