const { Restaurant } = require('./index.js');


const getImages = (id, callback) => {
  Restaurant.findById(id, (err, data) => {
    if (err) callback(err, null);
    callback(null, data.photos);
  });
};
 
module.exports.getImages = getImages;
