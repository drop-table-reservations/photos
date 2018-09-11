const  model  = require('./index.js')

//function to help get reviews
const getReviews = (id, callback) => {
    model.Restaurant.findById(id, (err, data) => {
      if (err) callback(err, null);
      console.log('THIS IS THE RESTAURANT=====' + data)
      callback(null, data.photos);
    });
  };

  module.exports.getReviews = getReviews;

