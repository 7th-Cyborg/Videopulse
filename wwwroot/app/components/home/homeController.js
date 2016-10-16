(function () {
	// Defining homeController
	angular.module("MobileWebApp")
		.controller("homeController", homeController);

	function homeController($scope, videoDataService) {
		//Using our service to get data		
		videoDataService.getVideos().then(function (doc) {
			$scope.videoList = doc.data;
		});
	}

})();