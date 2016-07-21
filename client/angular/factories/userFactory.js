app.factory('userFactory', ['$http', function($http){
	function UserFactory(){
		this.login =  function(user, callback){
			console.log(user.body)
		}
	}
	return new UserFactory();
}]);