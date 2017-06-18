'use strict'; 
var wapp = angular.module("miPrimeraWebApp", []);

wapp.controller('controladorBasico', ['$scope', 

	function controladorBasico($scope){
		var misDogs = [
			{nombre: 'Saul', edad: 12, foto:'Saul.jpg'}, 
			{nombre: 'Memo', edad: 6, foto:'Memo.jpg'}, 
			{nombre: 'Raul', edad: 2, foto:'Raul.jpeg'}
		];

		$scope.superDogs = misDogs;
	}
]);
