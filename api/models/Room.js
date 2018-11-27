/**
 * Room.js
 *
 * @description :: A model definition.  Represents a database table/collection/etc.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝


    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝


    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

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
    },

    img: {
      required: true,
      type: 'string',
      description: 'the back-end filename for the room'
    },

    dimx: {
      type: 'number',
      required: false,
      description: 'the width of the map'
    },

    dimy: {
      type: 'number',
      required: false,
      description: 'the height of the map'
    },

    dimt: {
      type: 'string',
      required: false,
      description: 'the unit type for the map dims'
    }
  },

  datastore: 'mongodb'

};

