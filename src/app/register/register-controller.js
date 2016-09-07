angular.module('ng-bolierplate.register')
.controller('Register.Step1Ctrl',function registerCtrl($scope,$RegisterStep1Service,$http){
	$scope.registerConfirm = function(){
		RegisterStep1Service.register($scope.userName,$scope.password1);
	};
	$scope.registerCancle = function(){
		alert('cancle');
	};
});