'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port=3700;

mongoose.Promise= global.Promise;
mongoose.connect('mongodb://localhost:27017/blog')
			.then (()=>{
				console.log("Conexion a la Base de datos Establecida Satisfactoriamente");

				app.listen(port,()=>{
					console.log("Servidor corriendo correctamente desde LOcalhost:3700");
				});
	})

				.catch(err => console.log(err));