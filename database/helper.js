const model = require('./index.js');


const getImages = (id, callback) => {
  model.Restaurant.findById(id, (err, data) => {
    if (err) callback(err, null);
    // console.log("DATAPHOTOS" + data)
    callback(null, data.photos);
  });
};

module.exports.getImages = getImages;
