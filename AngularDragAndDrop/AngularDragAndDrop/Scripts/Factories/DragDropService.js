var DragDropService = function ($http, $q, $location) {
    var DragDropService = {};

    DragDropService.getUpperPanelData = function () {

        return $http.get('/Home/GetData');

    };

    //var myData = {};




    DragDropService.postFormData = function (myData) {



        var postform = $http({
            method: "POST",

            data: myData,

            url: '/Home/PostData'
        })

        return postform;
    };

    

    return DragDropService;
}


DragDropService.$inject = ["$http", '$q', '$location'];