portfolio.config(function($routeProvider) {
	$routeProvider.when('/', {
		controller: 'portfolioController',
		templateUrl: function($routeParams) {
			console.log('routing to home');
			return '/pages/homeView/html';
		}
	});

	$routeProvider.when('/skills', {
		controller: 'portfolioController',
		templateUrl: function($routeParams) {
			console.log('routing to skills page');
			return '/pages/skillsView';
		}
	});

	$routeProvider.when('/projects', {
		controller: 'portfolioController',
		templateUrl: function($routeParams) {
			console.log('routing to porjecs page');
			return '/pages/projectsView';
		}
	});

	$routeProvide.when('/projects/myGrub', {
		controller: 'portfolioController', 
		templateUrl: function($routeParams) {
			console.log('routing to mygrub');
			return '/projects/myGrub/index.html'
		}
	});

	$routeProvider.when('/projects/countdown', {
		controller: 'portfolioController',
		templateUrl: function($routeParams) {
			console.log('routing to countdown');
			return '/projects/countdown/index.html'
		}
	});

	$routeProvider.when('/projects/interactiveMap', {
		controller: 'portfolioController',
		templateUrl: function($routeParams) {
			console.log('routing to interactiveMap');
			return '/projects/interactiveMap/index.html'
		}
	});
})