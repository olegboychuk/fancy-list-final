var app = angular.module('petsList',["checklist-model"]);

app.factory('PetsFactory', function(){
	PetsFactory={};
	var pets = ["cat", "dog", "fish", "dinosaur"];

	PetsFactory.getPets =  function(){
		return pets;
	}

	return PetsFactory;
});

app.controller('PetsListController', function( $scope,PetsFactory ){

	$scope.allPets = PetsFactory.getPets();
	// $scope.allSelectedPets = ['fish'];
	$scope.randomPet = $scope.allPets[Math.floor(Math.random() * $scope.allPets.length)];
	var pet = $scope.randomPet;
	$scope.allSelectedPets = [pet];

});
