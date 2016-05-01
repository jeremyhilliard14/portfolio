var portfolioApp = angular.module('portfolioApp', ['ngRoute']);

portfolioApp.config(function($routeProvider) {
	$routeProvider.when('/', {
		controller: 'portfolioController',
		templateUrl: function($routeParams) {
			console.log('routing to home');
			return 'pages/homeView.html';
		}
	});

	$routeProvider.when('/skills', {
		controller: 'portfolioController',
		templateUrl: function($routeParams) {
			console.log('routing to skills page');
			return 'pages/skillsView.html';
		}
	});

	$routeProvider.when('/projects', {
		controller: 'portfolioController',
		templateUrl: function($routeParams) {
			console.log('routing to projects page');
			return 'pages/projectsView.html';
		}
	});

	// $routeProvide.when('/projects/myGrub', {
	// 	controller: 'portfolioController', 
	// 	templateUrl: function($routeParams) {
	// 		console.log('routing to mygrub');
	// 		redirectTo: 'students.digitalcrafts.com/karma-yogis'
	// 	}
	// });

	// $routeProvider.when('/projects/countdown', {
	// 	controller: 'portfolioController',
	// 	templateUrl: function($routeParams) {
	// 		console.log('routing to countdown');
	// 		return 'projects/countdown/index.html'
	// 	}
	// });

	// $routeProvider.when('/projects/interactiveMap', {
	// 	controller: 'portfolioController',
	// 	templateUrl: function($routeParams) {
	// 		console.log('routing to interactiveMap');
	// 		return 'projects/interactiveMap/index.html'
	// 	}
	// });

	// $routeProvider.when('/projects/memoryGame', {
	// 	controller: 'portfolioController',
	// 	templateUrl: function($routeParams) {
	// 		console.log('routing to memoryGame');
	// 		return 'projects/memoryGame/index.html'
	// 	}
	// });

	// $routeProvider.when('/project/googleMaps', {
	// 	controller: 'portfolioController',
	// 	templateUrl: function($routeParams) {
	// 		console.log('routing to googleMaps');
	// 		return 'projects/googleMaps/'
	// 	}
	// });

	$routeProvider.when('/contact', {
		controller: 'contactController',
		templateUrl: function($routeParams) {
			console.log('routing to contact form');
			return 'pages/contactView.html'
		}
	});

	$routeProvider.otherwise({
        redirectTo: '/'
    });
});



portfolioApp.controller('portfolioController', function($scope, $location, $route) {


});