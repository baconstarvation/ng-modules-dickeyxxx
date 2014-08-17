// large-file is the same as the initial app.js file

var app = angular.module('app', [])

app.factory('GithubSvc', function ($http) {
	return {
		fetchStories: function () {
			return $http.get('https://api.github.com/users')
		}
	}
})

app.controller('GithubCtrl', function ($scope, GithubSvc) {
	GithubSvc.fetchStories().success(function (users) {
		$scope.users = users
	}
})