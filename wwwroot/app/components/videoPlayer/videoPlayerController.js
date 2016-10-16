(function () {
	// Defining videoPlayerController
	angular.module("MobileWebApp")
		.controller("videoPlayerController", videoPlayerController);

	function videoPlayerController($scope, $routeParams, videoDataService) {
		//Using our service to get data
		videoDataService.getVideo($routeParams.videoId).then(function (doc) {
			$scope.video = doc.data;
			$scope.videoUrl = "/api/file/" + doc.data.videoName;
		});
	}

})();