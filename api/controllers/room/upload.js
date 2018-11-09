module.exports = async function add(req, res) {
  var author = req.body.author;
  var room = req.body.room;
  var tags = req.body.tags;
  var notes = req.body.notes;

  Room.create({
      authorname: author,
      roomname: room
    })
    .exec(function (err) {
      if (err) {
        res.send(500, {
          error: 'database error'
        });
        //res.redirect('500');
      } else {
        res.redirect('/room');
      }
    });
}
/*
module.exports = {
  


  friendlyName: 'Upload',


  description: 'Uploads a room.',


  extendedDescription:
`This creates a new room record in the database`,


  inputs: {

      author: {
          type: 'string',
          required: true,
          description: 'Steve Jobs',
          maxLength: 200,
          example: 'Argagarg'
        },
    
        room: {
          type: 'string',
          required: true,
          description: 'The name or title given to the created room',
          maxLength: 200,
          example: 'The Chinese Room'
        },
    
        tags: {
          type: 'string',
          required: false,
          description: 'a comma-separated string of tags',
          maxLength: 120,
          example: 'fantasy, medieval'
        },
    
        notes: {
          type: 'string',
          required: false,
          description: 'a description and notes for the room',
          maxLength: 500,
          example: 'this room demonstrates John Searles famous thought experiment'
        }

  },


  exits: {

    invalid: {
      responseType: 'badRequest',
      description: 'The provided fullName, password and/or email address are invalid.',
      extendedDescription: 'If this request was sent from a graphical user interface, the request '+
      'parameters should have been validated/coerced _before_ they were sent.'
    },

  },


  fn: async function (inputs, exits) {
    var author = inputs.body.author;
    var room = inputs.body.room;
    var tags = inputs.body.tags;
    var notes = inputs.body.notes;

    // Build up data for the new user record and save it to the database.
    Room.create(Object.assign({
      authorname:author,
      roomname:room,
      tags:tags,
      creatornotes:notes
    }, {}));

    // Since everything went ok, send our 200 response.
    return exits.success();

  }


};
*/