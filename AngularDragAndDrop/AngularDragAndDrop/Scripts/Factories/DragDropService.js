var DragDropService = function ($http, $q, $location) {
    var DragDropService = {};

    DragDropService.getUpperPanelData = function () {

        return $http.get('/Home/GetData');

    };

    return DragDropService;
}


DragDropService.$inject = ["$http", '$q', '$location'];