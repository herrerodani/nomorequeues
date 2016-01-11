'use strict';

angular.module('nomorequeuesApp', [
  'nomorequeuesApp.auth',
  'nomorequeuesApp.admin',
  'nomorequeuesApp.constants',
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'btford.socket-io',
  'ui.router',
  'ui.bootstrap',
  'validation.match'
])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/');

    $locationProvider.html5Mode(true);
  });
