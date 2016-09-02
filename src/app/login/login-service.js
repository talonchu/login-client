angular.module('ng-bolierplate.login')

.service('LoginService',['$http',function($http){
	this.login = function (username,password){
		var params = {
			'userName':username,
			'password':password
		};
		// var URL = Routes.buildURL(Routes.login);
		var URL = 'http://localhost:8088/user/login';
		// return $http.post(URL,data);
		var headers = {'Content-Type':'application/json'};
		return $http.post(URL,params,headers);
	};
}]);