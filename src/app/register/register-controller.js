angular.module('ng-bolierplate.register')
.controller('Register.Step1Ctrl',function registerCtrl($scope,RegisterStep1Service,$http){
	$scope.registerConfirm = function(){
		RegisterStep1Service.registerVerification($scope.userName).success(function(data){
			var user = JSON.stringify(data);
			console.log(data.userName);
			if (user.userName === '') {
				alert('未注册');
			};
		});
	};
	$scope.registerCancle = function(){
		alert('cancle');
	};
});