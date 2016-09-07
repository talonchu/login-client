angular.module('ng-bolierplate.register')
	.service('RegisterStep1Service',['$http',function($http){
		this.registerConfirm = function(userName,password){
			alert(userName+' '+password);
		};
	}
]);