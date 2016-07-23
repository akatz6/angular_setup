var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var QuestionSchema = new mongoose.Schema({
	question: {"type":String, required:true, minlength: 10},
	description: {"type":String},
	_answer : [{ type: Schema.Types.ObjectId, ref: 'Answer' }]
})

var AnswerSchema = new mongoose.Schema({
	_questions : [{ type: Schema.Types.ObjectId, ref: 'Question' }],
	answer: {"type":String, required:true},
	user: {"type":String, required:true},
	likes: {"type":Number, required:true},
})

var Question  = mongoose.model('Question', QuestionSchema);
var Answer = mongoose.model('Answer', AnswerSchema);