app.factory('welcomeFactory', ['$http', function($http){
	function WelcomeFactory(){
		this.get_name =  function(callback){
			$http.get('/get_name').then(function(retuned_data){
				callback(retuned_data)
			})
		}
	}
	return new WelcomeFactory();
}]);