var Relative = require('../models/relative.model');

function getAll(request, response) {
  Relative.find(function(error, relatives) {
    if(error) {
      return response.json({ message: 'could not find any relatives' });
    }
    response.json(relatives);
  });
}

// POST
function createRelative(request, response) {
  var relative = new Relative(request.body);
  relative.save(function(error) {
    if (error) return response.json(error);
    response.json({relative: relative});
  });
}

module.exports = {
  getAll: getAll,
  createRelative: createRelative
};
