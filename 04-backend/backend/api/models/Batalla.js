/**
 * Batalla.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombre:{
      type: 'string',
      required: true,
    },

    //batalla <-pokemon
    pokemon:{//Nombre FK
      model:"Pokemon", //Modelo con el cual relacionamos
      required: true //requerida 1 - N
      //false //opcional 0 - N (por defecto)
    },

  },

};

