var Relative = require('../models/relative.model');

function getAll(request, response) {
  Relative.find(function(error, relatives) {
    if(error) {
      return response.json({ message: 'could not find any relatives' });
    }
    response.json(relatives);
  });
}

module.exports = {
  getAll: getAll
};
