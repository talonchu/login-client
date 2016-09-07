angular.module('ng-bolierplate.postLogin.allAccess')
.controller('Index.IndexCtrl',function indexCtrl($scope,$state){
	var user = angular.fromJson(localStorage.getItem('user'));
	if (user !== null) {
		console.log(user);
		$scope.userName = user.userName;
		$scope.roleDto = user.roleDto;
	}
	else{
		$state.go('login');
	}
});