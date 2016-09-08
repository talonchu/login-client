angular.module('ng-bolierplate.register')
.config(function config($stateProvider, $urlRouterProvider){
	$stateProvider
	.state('register',{
		url: '/register',
		views:{
			"login-content":{
				template:'<div ui-view="login-content"></div>'
			}
		}
	})
	.state('register.step1',{
		url:'/step1',
		views:{
			'login-content':{
				controller:'Register.Step1Ctrl',
				templateUrl: 'register/register_step1.tpl.html'
			}
		},
		data:{
			pagetitle:'register-step1'
		}
	});
});