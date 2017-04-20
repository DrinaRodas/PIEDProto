var mongoose = require('mongoose');

var TareasSchema = new mongoose.Schema({
	nombre: String,
	prioridad; Number,
	fecha: String

});

mongoose.model('Tareas', TareasSchema);