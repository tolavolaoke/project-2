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



// GET
function getRelative(request, response) {
  var id = request.params.id;
  Relative.findById({ _id: id }, function (error, relative) {
    if (error) return response.json({message: 'Could not find relative b/c:' + error});
    response.json({relative: relative});
  }).select('-__v');
}




// PATCH
function updateRelative(request, response) {
  var id = request.params.id;

  Relative.findById({ _id: id }, function(error, relative) {
    if(error) return response.json({message: 'Could not find relative b/c:' + error});

    if (request.body.firstname) relative.name = request.body.firstname;
    if (request.body.surname) relative.name = request.body.surname;
    if (request.body.location) relative.location = request.body.location;
    if (request.body.relation) relative.relation = request.body.relation;


    relative.save(function(error) {
      if (error) return response.status(404).json({messsage: 'Could not update relative b/c:' + error});

      response.json({ message: 'relative successfully updated', relative: relative });
    });
  }).select('-__v');
}





module.exports = {
  getAll: getAll,
  createRelative: createRelative,
  updateRelative: updateRelative,
  getRelative: getRelative
};
