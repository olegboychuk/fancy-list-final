var app = angular.module('petsList',["checklist-model"]);

app.factory('PetsFactory', function(){
	PetsFactory={};
	var pets = ["cat", "dog", "fish", "dinosaur"];

	PetsFactory.getPets =  function(){
		
		return pets;
	}

	return PetsFactory;
});


app.filter('capitalize', function() {
  return function(input, scope) {
    if (input!=null)
       input = input.toLowerCase();
       return input.substring(0,1).toUpperCase()+input.substring(1);
  }
});

app.controller('PetsListController', function( $scope,PetsFactory ){

	$scope.allPets = PetsFactory.getPets();
	// $scope.allSelectedPets = ['fish'];
	$scope.randomPet = $scope.allPets[Math.floor(Math.random() * $scope.allPets.length)];
	var pet = $scope.randomPet;
	$scope.allSelectedPets = [pet];

});
