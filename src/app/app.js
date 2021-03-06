var ngBoilerplate_modules = [
'ng-bolierplate.login',
'ng-bolierplate.postLogin.allAccess',
'ng-bolierplate.register'
];

for (var i in ngBoilerplate_modules) {
  angular.module(ngBoilerplate_modules[i], []);
}

angular.module( 'ngBoilerplate', [
  'templates-app',
  'templates-common',
  'ngBoilerplate.home',
  'ngBoilerplate.about',
  'ui.router',
  'ng-bolierplate.login',
  'ng-bolierplate.config',
  'ng-bolierplate.postLogin.allAccess',
  'ng-bolierplate.register'
  ])

.config( function myAppConfig ( $stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise( 'login' );
})

.run( function run () {
})

.controller( 'AppCtrl', function AppCtrl ( $scope, $location,$state) {
  $scope.$on('$stateChangeSuccess', function(event, toState, toParams, fromState, fromParams){
    if ( angular.isDefined( toState.data.pageTitle ) ) {
      $scope.pageTitle = toState.data.pageTitle + ' | ngBoilerplate' ;
    }
  });
})

.service('WhereToService',function($http,$state){
  this.whereTo = function () {
    alert(sessionStorage.getItem('userName'));
    if (sessionStorage.getItem('userName') != null) {
      var stateToNavigateTo = 'allAccess.step1';
      $state.go(stateToNavigateTo);
    }
  };

})

;

