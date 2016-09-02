angular.module('ng-bolierplate.login')
.config(function config( $stateProvider ) {
  $stateProvider.state( 'login', {
    url: '/login',
    views: {
      'login-content': {
        controller: 'Login.LoginCtrl',
        templateUrl: 'login/login.tpl.html'
      }
    },
    data:{ 
      pageTitle: 'Login' 
    }
  });
});


