angular.module('ng-bolierplate.postLogin.allAccess')
.config(function config($stateProvider, $urlRouterProvider){
	$stateProvider.state('allAccess', {
		url: '/post-login/allAccess',
		views: {
			"login-content": {
				template: '<div ui-view="login-content"></div>'
			}
		}

	})
	.state('allAccess.step1',{
		url: '/index',
		views: {
			"login-content": {
				controller: 'Index.IndexCtrl',
				templateUrl: 'postLogin/allAccess/allAccess_step1.tpl.html'
			}
		},
		data: {
			pageTitle: 'user page'
		}
	});
});