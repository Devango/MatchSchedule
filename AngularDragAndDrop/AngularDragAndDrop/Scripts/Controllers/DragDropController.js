var DragDropController = function ($scope, $modal, DragDropService) {


    var MainCtrl = this;
    $scope.centerAnchor = true;
    $scope.toggleCenterAnchor = function () { $scope.centerAnchor = !$scope.centerAnchor }

    $scope.user = {
        name: 'name'        
    };


    $scope.user.age = "02";

    $scope.user.options = [
      { id: "01", name: "02" }
     , { id: "02", name: "03" }
     , { id: "-3", name: "04" }
    ];




    $scope.open = function () {

        $modal.open({
            templateUrl: 'myModalContent.html',
            backdrop: true,
            windowClass: 'modal',
            controller: function ($scope, $modalInstance, $log, user) {
                $scope.user = user;
                $scope.submit = function () {
                    $log.log('Submiting user info.');
                    $log.log(user);


                    
                    var postData = DragDropService.postFormData(user);

                    postData.success(function (objData) {

                        //$scope.draggableObjects = objData;

                        console.log('Data Posted to server !!!');

                    })

                    postData.error(function (error) {

                        $scope.status = 'Unable to post data: ' + error.message;

                        console.log($scope.status);

                    });


                    $modalInstance.dismiss('cancel');
                }
                $scope.cancel = function () {
                    $modalInstance.dismiss('cancel');
                };
            },
            resolve: {
                user: function () {
                    return $scope.user;
                }
            }
        });
    };


    getUpperPanelData();


    function getUpperPanelData() {

        var getData = DragDropService.getUpperPanelData();

        getData.success(function (objData) {

            $scope.draggableObjects = objData;

            console.log($scope.draggableObjects);

        })

        getData.error(function (error) {

            $scope.status = 'Unable to load data: ' + error.message;

            console.log($scope.status);

        });
    }



    /*Use this for debug purpose
    $scope.draggableObjects = [{ name: 'dog', picture: 'url(pictures/dog.jpg)', type: 'animal' },
              { name: 'parrot', picture: 'url(pictures/parrot.jpg)', type: 'bird' },
              { name: 'horse', picture: 'url(pictures/horse.jpg)', type: 'animal' },
              { name: 'lion', picture: 'url(pictures/lion.jpg)', type: 'animal' },
              { name: 'sparrow', picture: 'url(pictures/sparrow.jpg)', type: 'bird' },
              { name: 'hawks', picture: 'url(pictures/hawks.jpg)', type: 'bird' },
              { name: 'elephant', picture: 'url(pictures/elephant.jpg)', type: 'animal' },
              { name: 'doves', picture: 'url(pictures/doves.jpg)', type: 'bird' },
              { name: 'finches', picture: 'url(pictures/finches.jpg)', type: 'bird' },
              { name: 'monkey', picture: 'url(pictures/monkey.jpg)', type: 'animal' }
    ];
    */
    $scope.droppedObjects1 = [];
    $scope.droppedObjects2 = [];
    $scope.onDropComplete1 = function (data, evt) {

        if (data.type != 'animal') {
            alert("Wrong entry !!!");
            return false;
        }
        var index = $scope.droppedObjects1.indexOf(data);

        var indexDraggableObjects = $scope.draggableObjects.indexOf(data);


        if (index == -1) {
            $scope.droppedObjects1.push(data);
            $scope.draggableObjects.splice(indexDraggableObjects, 1);

            IsAllDone();
        }
    }

    $scope.onDropComplete2 = function (data, evt) {

        if (data.type != 'bird') {
            alert("Wrong entry !!!");
            return false;
        }

        var index = $scope.droppedObjects2.indexOf(data);
        var indexDraggableObjects = $scope.draggableObjects.indexOf(data);


        if (index == -1) {
            $scope.droppedObjects2.push(data);

            $scope.draggableObjects.splice(indexDraggableObjects, 1);

            IsAllDone();
        }
    }

    function IsAllDone() {
        if ($scope.draggableObjects.length == 0)
            alert("Excellent !!!");
    }

}

DragDropController.$inject = ['$scope', '$modal', 'DragDropService'];