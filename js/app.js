var app = angular.module('app', ['ngResource','ngTouch'], function($locationProvider) {
      $locationProvider.html5Mode({
                                               enabled: true,
                                               requireBase: false
                                               });
    });
 
 
app.controller('mainCtrl',function($window, $scope){
        $scope.scrollPos = 0;
 
        $window.onscroll = function(){
            $scope.scrollPos = document.body.scrollTop || document.documentElement.scrollTop || 0;
            $scope.$apply(); //or simply $scope.$digest();
        };
    });
               
app.controller('workCtrl',function($window, $scope, $resource,$location){
	var content = $resource('content/work.json').query(function(){
		$scope.page = $location.search().page;
        if(($scope.page  !== undefined) && $scope.page > 0 && $scope.page <= content.length){
			$scope.index = $scope.page-1;
			} else {
            $scope.index = 0;
            }

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

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 100
        }, 1000);
        return false;
      }
    }
  });
});

// $(window).resize(function() {
// 	if(window.innerHeight > 650 ) {
//   		$('#home').css('height', window.innerHeight+'px');
//  		} else {
//   			$('#home').css('height','650px');
//   			console.log('min');
//  	}
// });

window.onload = function() {
 setTimeout(function() {
  // preload image
  new Image().src = "http://liviarickli.nl/images/webdesign-philips-allianz.png";
  new Image().src = "http://liviarickli.nl/images/trading-ing.png";
  new Image().src = "http://liviarickli.nl/images/building-ing.png";
  new Image().src = "http://liviarickli.nl/images/webdesign-sns.png";
  new Image().src = "http://liviarickli.nl/images/webdesign-hema.png";
  new Image().src = "http://liviarickli.nl/images/brandbook-boarnsterhim.png";
  new Image().src = "http://liviarickli.nl/images/redesign-menzis.png";
  new Image().src = "http://liviarickli.nl/images/brochure-b.amsterdam.png";
  new Image().src = "http://liviarickli.nl/images/webdesign-superbrand.png";
  new Image().src = "http://liviarickli.nl/images/webdesign-jannekeg.png";
  new Image().src = "http://liviarickli.nl/images/poster-lefhebbers1.png";
  new Image().src = "http://liviarickli.nl/images/brandbook-mindful1.png";
  new Image().src = "http://liviarickli.nl/images/flyer-bamsterdam.png";
  new Image().src = "http://liviarickli.nl/images/brand-weeklywine.png";
  new Image().src = "http://liviarickli.nl/images/logo-breakfast.png";
  new Image().src = "http://liviarickli.nl/images/flyer-keurmerk.png";
  new Image().src = "http://liviarickli.nl/images/gamedesign.png";
  new Image().src = "http://liviarickli.nl/images/menucard-walvis.png";
  new Image().src = "http://liviarickli.nl/images/menucard-lennep.png";
  new Image().src = "http://liviarickli.nl/images/presentation-george.png";
  new Image().src = "http://liviarickli.nl/images/etiket-boengroen.png";
  new Image().src = "http://liviarickli.nl/images/game-cqthartslag.png";
  new Image().src = "http://liviarickli.nl/images/menucard-katoen1.png";
  new Image().src = "http://liviarickli.nl/images/philips-1.png";
  new Image().src = "http://liviarickli.nl/images/applicatie-ing.png";
  new Image().src = "http://liviarickli.nl/images/applicatie2-ing.png";
  new Image().src = "http://liviarickli.nl/images/poster_lefhebbers.jpg";
  new Image().src = "http://liviarickli.nl/images/flyer-b.jpg";
  new Image().src = "http://liviarickli.nl/images/redesign-hema2.jpg";
  new Image().src = "http://liviarickli.nl/images/redesign-sns1.jpg";
  new Image().src = "http://liviarickli.nl/images/brandbook-mindful.png";
  new Image().src = "http://liviarickli.nl/images/brochure-b.png";
  new Image().src = "http://liviarickli.nl/images/brandbook-boarnster1.jpg";
  new Image().src = "http://liviarickli.nl/images/redesign-menzis.jpg";
  new Image().src = "http://liviarickli.nl/images/etiket-boen.png";
  new Image().src = "http://liviarickli.nl/images/logo-weeklywine.png";
  new Image().src = "http://liviarickli.nl/images/presentatie-george.jpg";
  new Image().src = "http://liviarickli.nl/images/logo-thebreakfastclub.png";
  new Image().src = "http://liviarickli.nl/images/website-superbrand.jpg";
  new Image().src = "http://liviarickli.nl/images/gamedesign-cmd.png";
  new Image().src = "http://liviarickli.nl/images/dinerkaart-walvis.jpg";
  new Image().src = "http://liviarickli.nl/images/menucard-cafelennep.png";
  new Image().src = "http://liviarickli.nl/images/website-jgeurts.jpg";
  new Image().src = "http://liviarickli.nl/images/flyer-kkk.png";
  new Image().src = "http://liviarickli.nl/images/cqthartslag1.png";
  new Image().src = "http://liviarickli.nl/images/menucard-katoen.png";
  new Image().src = "http://liviarickli.nl/images/menu-ginn.png";
  new Image().src = "http://liviarickli.nl/images/menu-gin.png";
  new Image().src = "http://liviarickli.nl/images/event-superopkikker.png";
  new Image().src = "http://liviarickli.nl/images/event-superopkikkerdag.png";
  new Image().src = "http://liviarickli.nl/images/banner-principlevastgoed.png";
  new Image().src = "http://liviarickli.nl/images/banners-principlevastgoed.png";
  new Image().src = "http://liviarickli.nl/images/banner-perfecth.png";
  new Image().src = "http://liviarickli.nl/images/banner-perfecth.png";
 }, 1000);
};
