const model = require('./index.js');


const getReviews = (id, callback) => {
  model.Restaurant.findById(id, (err, data) => {
    if (err) callback(err, null);
    callback(null, data.photos);
  });
};

module.exports.getReviews = getReviews;
