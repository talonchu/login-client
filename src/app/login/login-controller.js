angular.module('ng-bolierplate.login').controller('Login.LoginCtrl', function LoginCtrl($state,$stateParams,$scope,$location,LoginService,$http,WhereToService) {
	$scope.login = function () {
		LoginService.login($scope.username,$scope.password)
		.success(function(data){
			var user = JSON.stringify(data);
			if(user.userName !== ''){
				localStorage.setItem("user" , user);
				$state.go('allAccess.step1');
			}
			else{
				alert('username or password incorrect');
				localStorage.setItem("userName" , null);
			}
		});
	};
});
