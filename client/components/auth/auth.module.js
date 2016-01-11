'use strict';

angular.module('nomorequeuesApp.auth', [
  'nomorequeuesApp.constants',
  'nomorequeuesApp.util',
  'ngCookies',
  'ui.router'
])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
