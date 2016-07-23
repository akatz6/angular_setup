var mongoose = require('mongoose'),
Question = mongoose.model('Question'),
Answer = mongoose.model('Answer');
var name = ""

module.exports = (function(){
  return {
  	save_name:function(req, res){
  		req.session.user = req.body.user
  		res.json({'user': req.session.user})
  	}, //end of save name methord
  	return_name:function(req, res){
  		console.log(req.session.user)
  		res.json({'user': req.session.user})
  	}
  }
})();