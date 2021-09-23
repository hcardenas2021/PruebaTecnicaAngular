'use strict'

var mongoose = require ('mongoose');
var Schema = mongoose.Schema;
var PostSchema= Schema ({

	titulo: String,
	fecha: String,
	autor: String,
	email: String,
	descripcion: String,
	image: String
});

module.exports= mongoose.model('Post',PostSchema);

// en los parametros se coloca Post que es el nombre de la coleccion en la base de datos. 
// Aunque en la base de datos la coleccion se llama post Mongo lo que hace es que pone en minuscula y prulaliza