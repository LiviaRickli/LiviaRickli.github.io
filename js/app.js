var app = angular.module('app', ['ngResource']);

app.controller('mainCtrl',function($window, $scope){
        $scope.scrollPos = 0;

        $window.onscroll = function(){
            $scope.scrollPos = document.body.scrollTop || document.documentElement.scrollTop || 0;
            $scope.$apply(); //or simply $scope.$digest();
        };
    });
	
app.controller('workCtrl',function($window, $scope, $resource){
		var content = $resource('content/work.json').query(function(){
			$scope.index = 0;
			$scope.contentItem = content[$scope.index];
			$scope.next = function(){
				if($scope.index < content.length-1){
					$scope.index = $scope.index+1;
				} else {
					$scope.index = 0;
				}
				$scope.contentItem = content[$scope.index];
			}
			
			$scope.prev = function(){
				if($scope.index > 0){
					$scope.index = $scope.index-1;
				} else {
					$scope.index = 0;
				}
				$scope.contentItem = content[$scope.index];
			}				
		});		
    });