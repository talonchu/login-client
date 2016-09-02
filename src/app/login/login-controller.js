angular.module('ng-bolierplate.login').controller('Login.LoginCtrl', function LoginCtrl($stateParams,$scope, LoginService, $http,ENV,$state,$q) {
	$scope.login = function () {
		LoginService.login($scope.username,$scope.password).then(function ( response ){
			console.log(response.data);
			if (response.data.userName !== '' && response.data.userName !== null) {
				alert('yes');
			}
			else{
				alert('no');
			}
		});
	};
});
