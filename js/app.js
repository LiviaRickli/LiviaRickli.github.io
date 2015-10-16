var app = angular.module('app', []);

angular.module('app',[])
    .controller('mainCtrl',function($window, $scope){
        $scope.scrollPos = 0;

        $window.onscroll = function(){
            $scope.scrollPos = document.body.scrollTop || document.documentElement.scrollTop || 0;
            $scope.$apply(); //or simply $scope.$digest();
        };
    });