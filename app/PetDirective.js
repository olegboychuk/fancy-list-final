
app.directive('checkboxSet',['PetsFactory', function(PetsFactory){
	return {
		scope:{
			pets: '=',
			selectedPets:'='
		},
		templateUrl: 'app/checkbox-set.html',
		link: function( scope, element ){

			var isSomethingSelected = function(){
				if ( scope.selectedPets.length >= 0 && 
					scope.selectedPets.length < scope.pets.length  ){
					return true;
				}

				return false;
			},

			isEmpty = function(){
				if(scope.selectedPets.length === 0 ){
					return true;
				}

				return false;
			},

			isAllSelected = function(){
				if(scope.selectedPets.length === scope.pets.length){
					return true;
				}
				return false;
			},

			stateUpdate = function(){
				console.log('checkboxSet::stateUpdate', scope.selectedPets);
				scope.partial = false;

				if(isAllSelected()){
					scope.unchecked = false;
				}else if(isEmpty()){
					scope.unchecked = true;
				}else{
					scope.unchecked = false;
					scope.partial = true;
				}			
			}

			stateUpdate();

			scope.$watchCollection( 'selectedPets', function(a, b){
				// console.log('checkboxSet::selectedPets watch', a, b);
				stateUpdate();
			} );

			scope.toogleAll = function(){
				// console.log('checkboxSet::toogleAll', scope.selectedPets);
				
				//scope.partial = false;
				if(isSomethingSelected()){
					 angular.copy( scope.pets, scope.selectedPets );
					//scope.unchecked = false;
				}else{
					angular.copy( [], scope.selectedPets );
					//scope.unchecked = true;
				}			
			}
 	 	}
	}
}])
