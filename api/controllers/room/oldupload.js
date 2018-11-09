module.exports = {



  friendlyName: 'Upload',


  description: 'Uploads a room.',


  extendedDescription: `This creates a new room record in the database`,


  inputs: {

    authorname: {
      type: 'string',
      required: true,
      unique: false,
      maxLength: 200,
      example: 'Argagarg'
    },

    roomname: {
      type: 'string',
      required: true,
      description: 'The name or title given to the created room',
      protect: true,
      example: 'The Chinese Room'
    },

    tags: {
      type: 'string',
      required: false,
      description: 'a comma-separated string of tags',
      maxLength: 120,
      example: 'fantasy, medieval'
    },

    creatornotes: {
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
      extendedDescription: 'If this request was sent from a graphical user interface, the request ' +
        'parameters should have been validated/coerced _before_ they were sent.'
    },

  },


  fn: async function (inputs, exits) {


    // Build up data for the new user record and save it to the database.
    // (Also use `fetch` to retrieve the new ID so that we can use it below.)
    Room.create(Object.assign({
        authorname: inputs.authorname,
        roomname: inputs.roomname,
        fullName: inputs.fullName,
        tosAcceptedByIp: this.req.ip
      }, {}))
      .intercept({
        name: 'UsageError'
      }, 'invalid')
      .fetch();


    // Since everything went ok, send our 200 response.
    return exits.success();

  }


};
