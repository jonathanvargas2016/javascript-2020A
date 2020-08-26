/**
 * Pokemon.js
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
    //Relaciones
    //Pokemon <-Usuario
    usuario:{//Nombre FK
      model:"Usuario", //Modelo con el cual relacionamos
      required: true //requerida 1 - N
                  //false //opcional 0 - N (por defecto)
    },
    //Pokemon -> Batallas
    batallas:{//uno a muchos(nombre en plural)
      collection:'Batalla', //Modelo a relacionarse
      via:'pokemon'//nombre atributo FK en el modelo relacionada
    }

  },

};

