'use strict'

var express = require ('express');

var PostControlador= require ('../controladores/post');
var router= express.Router();
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({ uploadDir: './img' });
router.get('/home',PostControlador.home);
router.post('/test',PostControlador.test);
router.post('/crear-post',PostControlador.guardarpost);
router.get('/post/:id?',PostControlador.mostrarPost); // el signo de interrogacion en la ruta es para indicar que es opcional
router.get('/posts',PostControlador.mostrarposts);
router.put('/actualizar-post/:id',PostControlador.actualizarpost);
router.delete('/borrar-post/:id',PostControlador.borrarpost);
router.post('/subir-imagen/:id',  multipartMiddleware, PostControlador.subirImagen);
router.get('/mostrar-imagen/:image',PostControlador.mostrarImagen);


module.exports= router;