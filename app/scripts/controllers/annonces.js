'use strict';



angular.module('siesteAppApp').filter('reverse', function() {
    return function(input, max) {
      var out = input;
      if(input.length > max){
      	out = input.substring(0, max);
      	out += " ...";
      }
     
      return out;
    };
});


/**
 * @ngdoc function
 * @name siesteAppApp.controller:AnnoncesCtrl
 * @description
 * # AnnoncesCtrl
 * Controller of the siesteAppApp
 */
angular.module('siesteAppApp')
  .controller('AnnoncesCtrl', function ($scope) {

    /*this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];*/

	$scope.myInterval = 0;
	$scope.noWrapSlides = false;


	$scope.totalItems = 64;
  	$scope.currentPage = 4;

	function disabled(data) {
	    var date = data.date, mode = data.mode;
	    return mode === 'day' && (date.getDay() === 0 || date.getDay() === 6);
	}

	$scope.dateOptions = {
	    dateDisabled: disabled,
	    formatYear: 'yy',
	    maxDate: new Date(2020, 5, 22),
	    minDate: new Date(),
	    startingDay: 1
	};

  	$scope.popup1 = {
		opened: false
	};

	$scope.popup2 = {
		opened: false
	};

  	$scope.open1 = function() {
	    $scope.popup1.opened = true;
    };

	$scope.open2 = function() {
		$scope.popup2.opened = true;
	};


    $scope.movies = [
    	{
    		id: 1, 
    		title: 'Chambre 30m2 proche Paris, & marché aux Puces', 
    		periode: 'Entre le 2017-01-01 et 2017-09-29', 
    		vote_average: 1000, 
    		vote_count: 715,
    		note: 6,
    		prix: 3,
    		unite_prix: "jour",
    		avec_cuisine: true,
    		avec_machine_cafe: false,
    		avec_tv: false,
    		avec_wifi: true,
    		avec_console_jeux_video: false,
    		images: [
    			{
    				id: 0,
    				path_image: 'https://a0.muscache.com/im/pictures/3a51fdce-7de3-4bb5-985f-12ba3df2bdaf.jpg?aki_policy=xx_large'
    			},{
    				id: 1,
    				path_image: 'https://a0.muscache.com/im/pictures/7072f500-6562-40dc-86e1-fd750cad58a0.jpg?aki_policy=xx_large'
    			}
    		]
    		
    	},{
    		id: 2, 
    		title: 'Charmant Studio dans les environs de Montmartre', 
    		periode: 'Tout 2017', 
    		vote_average: 1000, 
    		vote_count: 35,
    		note: 5,
    		prix: 50,
    		unite_prix: "mois",
    		avec_cuisine: true,
    		avec_machine_cafe: false,
    		avec_tv: true,
    		avec_wifi: false,
    		avec_console_jeux_video: false,
    		images: [
    			{
    				id: 0,
    				path_image: 'https://a0.muscache.com/im/pictures/6df3e24b-da22-4541-84ca-e674e9f1f1c0.jpg?aki_policy=x_large'
    			},{
    				id: 2,
    				path_image: 'https://a0.muscache.com/im/pictures/344cb2fe-9a35-439d-94a5-bfdc0d2db938.jpg?aki_policy=xx_large'
    			},{
    				id: 1,
    				path_image: 'https://a0.muscache.com/im/pictures/c290b61a-13af-4927-8f60-f37bf4284d66.jpg?aki_policy=x_large'
    			}
    		]
    		
    	},{
    		id: 3, 
    		title: 'Espace partagé, Shared space', 
    		periode: 'Tout 2017', 
    		vote_average: 1000, 
    		vote_count: 35,
    		note: 5,
    		prix: 75,
    		unite_prix: "mois",
    		avec_cuisine: true,
    		avec_machine_cafe: true,
    		avec_tv: true,
    		avec_wifi: true,
    		avec_console_jeux_video: true,
    		images: [
    			{
    				id: 0,
    				path_image: 'https://a0.muscache.com/im/pictures/f96b668f-17f9-4f18-8026-e28344f66e06.jpg?aki_policy=xx_large'
    			},{
    				id: 2,
    				path_image: 'https://a0.muscache.com/im/pictures/be1610d2-7e3d-49db-ba08-04b9a56ff843.jpg?aki_policy=x_large'
    			},{
    				id: 1,
    				path_image: 'https://a0.muscache.com/im/pictures/c30dfc91-9dc1-491d-a441-48cc2b2797fc.jpg?aki_policy=x_large'
    			}
    		]
    		
    	},{
    		id: 4, 
    		title: 'Cosy studio porte de Montmartre', 
    		periode: 'Tout 2017', 
    		vote_average: 1000, 
    		vote_count: 35,
    		note: 5,
    		prix: 60,
    		unite_prix: "mois",
    		avec_cuisine: true,
    		avec_machine_cafe: true,
    		avec_tv: true,
    		avec_wifi: true,
    		avec_console_jeux_video: false,
    		images: [
    			{
    				id: 0,
    				path_image: 'https://a0.muscache.com/im/pictures/030eaa9b-14cc-433f-83e8-2014219fb555.jpg?aki_policy=x_large'
    			},{
    				id: 2,
    				path_image: 'https://a0.muscache.com/im/pictures/e42aa54e-5d23-4c5f-a5f3-6f59cf91be02.jpg?aki_policy=x_large'
    			}
    		]
    		
    	}
	];





  });
