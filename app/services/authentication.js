graphApp.factory('Authentication', 
	function($firebase, 
		$firebaseAuth, 
		$routeParams, 
		$location, 
		FIREBASE_URL) {

		var ref = new Firebase(FIREBASE_URL);
		var auth = $firebaseAuth(ref);

	var myObject = {
		   // user: graph.email,
			login: function(user) {
				return auth.$authWithPassword({
					email: user.email,
					password: user.password
				}); // authwithpassword
			} ,// login

			register: function(user) {
				
				 return auth.$createUser({email: user.email, password: user.password});


			} // registration
		} // myObject


		

		return myObject;
	}); //factory












