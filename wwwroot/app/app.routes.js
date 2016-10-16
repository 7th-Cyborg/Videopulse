(function () {
    // Defining our routes
    angular.module("MobileWebApp")
        .config(function ($routeProvider) {
            $routeProvider
                .when("/", {
                    templateUrl: "app/components/home/homeView.html",
                    controller: "homeController",
                })
                .when("/video/:videoId", {
                    templateUrl: "app/components/videoPlayer/videoPlayerView.html",
                    controller: "videoPlayerController",
                })
                .otherwise({
                    redirectTo: "/"
                })
        })

})();