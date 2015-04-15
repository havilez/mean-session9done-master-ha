graphApp.controller("registration", 
	function($scope, 
		$location, 
		$firebaseAuth, 
		FIREBASE_URL,
		Authentication
		){

		var ref = new Firebase(FIREBASE_URL);
		var auth = $firebaseAuth(ref);

		$scope.login = function(){
			Authentication.login($scope.user)
			.then(function(user){
				$location.path("/graph");
			}).catch(function(error){
				$scope.message = error.message;
			}); // authwithpassword
			
	}; // login

// register new user with firebase here...
//  1. create new user using promise
// chk if new user -- auth should be null, do not allow user to register more than once
	$scope.register = function() {	
		Authentication.register($scope.user)
		  .then( function( user){
			$location.path("/graph");
		}).catch(function(error){
				$scope.message = error.message;
			}); // register new user

}  // register

});  






