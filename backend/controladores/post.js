'use strict'
var Post = require ('../modelos/post');
var fs= require ('fs');
var path= require ('path');

var controlador = {

	home: function (req,res) {

		return res.status(200).send ({

			message:"Hola soy Home"

		});
	},

	test: function(req,res) {

		return res.status(200).send ({
			message: "Soy el Metodo o Accion del Controlador Project"
		});
	},


	guardarpost: function(req,res) {

		var post = new Post(); 


		var params= req.body;
		post.titulo= params.titulo;
		post.fecha= params.fecha;
		post.autor= params.autor;
		post.email= params.email;
		post.descripcion= params.descripcion;
		post.image= params.image;

		post.save((err, postStored)=>{

			if (err) return res.status(500).send ({mesagge: 'Error al Guardar el Documento.'});
			if (!postStored) return res.status(404).send({message:'No se ha podido guardar el Documento'});
			return res. status(200).send({post: postStored});

		});
	},

mostrarPost: function (req, res) { //metodo para buscar un proyecto en este caso por el ID

		var PostId= req.params.id;
		if (PostId== null) return res.status(404).send({message:'El Post no existe'});
		Post.findById(PostId,(err,post)=>{
			if (err) return res.status(500).send ({mesagge: 'Error al Mostrar el Post.'});
			if (!post) return res.status(404).send({message:'El Post no existe'});
			return res.status(200).send ({
				post
			});
		});
	},
mostrarposts: function (req, res) { // Metodo para listar todos los Proyectos

		Post.find({}).exec((err, posts)=> {

			if (err) return res.status(500).send ({mesagge: 'Error al Mostrar los Post.'});
			if (!posts) return res.status(404).send({message:'Los Post no existen'});
			return res.status(200).send ({
				posts

			});
		});
	},

	actualizarpost: function (req, res) { // Metodo para listar todos los Proyectos

		var PostId= req.params.id;
		var actualizar= req.body;

		Post.findByIdAndUpdate(PostId,actualizar,{new:true},(err, postupdate)=> {

			if (err) return res.status(500).send ({mesagge: 'Error al Actualizar el Post.'});
			if (!postupdate) return res.status(404).send({message:'Los Post no se pueden Actualizar'});
			return res.status(200).send ({
				post: postupdate

			});
		});
	},


	borrarpost: function (req,res) {

		var PostId= req.params.id;
		Post.findByIdAndRemove(PostId,(err,postremove)=> {
			if (err) return res.status(500).send ({mesagge: 'Error al Eliminar el Post.'});
			if (!postremove) return res.status(404).send({message:'El Post no se pueden Eliminar'});
			return res.status(200).send ({
				post:postremove
			});
		});
	},



subirImagen: function(req, res){
		var postId = req.params.id;
		var fileName = 'Imagen no subida...';

		if(req.files){
			var filePath = req.files.image.path;
			var fileSplit = filePath.split('\\');
			var fileName = fileSplit[1];
			var extSplit = fileName.split('\.');
			var fileExt = extSplit[1];

			if(fileExt == 'png' || fileExt == 'jpg' || fileExt == 'jpeg' || fileExt == 'gif'){

				Post.findByIdAndUpdate(postId, {image: fileName}, {new: true}, (err, postUpdated) => {
					if(err) return res.status(500).send({message: 'La imagen no se ha subido'});

					if(!postUpdated) return res.status(404).send({message: 'El proyecto no existe y no se ha asignado la imagen'});

					return res.status(200).send({
						post: postUpdated
					});
				});

			}else{
				fs.unlink(filePath, (err) => {
					return res.status(200).send({message: 'La extensión no es válida'});
				});
			}

		}else{
			return res.status(200).send({
				message: fileName
			});
		}

	},

	mostrarImagen: function(req, res) {
		var file= req.params.image;
		var path_file='./img/'+file;
		fs.exists(path_file,(exists)=>{
			if (exists) {

				return res.sendFile(path.resolve(path_file));
			} else {
				return res.status(200).send ({

					mesagge:"No se encontro ninguna Imagen"
				});
			}
		});
	}


};
	module.exports=controlador;