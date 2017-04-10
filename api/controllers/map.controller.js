var request = require('request');
var googleData = require('../config/google-data');

function getMaps(req, res) {
  var place = req.query.place || '';
  if (!place.length) {
    return res.status(500).json({message: 'please provide a search term '});
  }

  var mapUrl = [
    googleData.GOOGLE_MAPS_API_URL,
    place.split(' ').join('+')
  ].join('');

  request(mapUrl, function (error, response, body) {
    var mapsJson;

    if (error) {
      console.warn('getMaps: could not get maps:', error);
      res.status(500).json({message: 'could not get maps'});
      return;
    }
    mapsJson = JSON.parse(body);
    // console.log('maps:', mapsJson);
    res.status(200).json(mapsJson.results);
  });
}

module.exports = {
  getMaps: getMaps

};
