angular.module('ng-bolierplate.login')

.service('LoginService',['$http',function($http){
	this.login = function (username,password){
		var params = {
			'userName':username,
			'password':password
		};
		alert(params);
		// var URL = Routes.buildURL(Routes.login);
		var URL = 'http://localhost:8088/user/login';
		// return $http.post(URL,data);
		var headers = {'Content-Type':'application/json'};
		$http.post(URL,params,headers).success(function(data){
			alert(data.userName+data.password);
			console.log(data);
		});
	};
}]);