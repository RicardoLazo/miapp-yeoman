'use strict';

/**
 * @ngdoc function
 * @name miappApp.controller:RegistroCtrl
 * @description
 * # RegistroCtrl
 * Controller of the miappApp
 */
angular.module('miappApp')
  .controller('RegistroCtrl', function ($scope,UserService,$cookies) {
    $scope.onSubmit = function(){
  		if($scope.registroForm.$valid){
  			//enviar data
  			UserService.registro($scope.usuario)
	  			.then(function(response){
	  				console.log(response);
	  				$cookies.put('token',response.data.token);
	  				
	  				var token = $cookies.get('token');
	  				console.log(token);
	  			});
  		}
  	}
  });
