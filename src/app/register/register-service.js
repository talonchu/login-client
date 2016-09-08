angular.module('ng-bolierplate.register')
.service('RegisterStep1Service',['$http',function($http){
	this.register = function(userName,password){
		
	};
	this.registerVerification = function(userName){
		var URL = 'http://localhost:8088/user/registerVerification?userName='+userName;
		return $http.get(URL);
	};
}]);