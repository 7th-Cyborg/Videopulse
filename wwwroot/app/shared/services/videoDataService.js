(function () {
    // Defining videoDataService for retrieving data
    angular.module("MobileWebApp")
        .service("videoDataService", function ($http) {

            this.getVideos = function () {
                return $http.get("/api/videos").
                    then(function (response) {
                        return response;
                    }, function (response) {
                        console.log("Error finding videos.");
                    });
            }

            this.getVideo = function (videoId) {
                return $http.get("/api/videos/" + videoId).
                    then(function (response) {
                        return response;
                    }, function (response) {
                        console.log("Error finding video.");
                    });
            }

        })

})();