var AngularDragAndDropExample = angular.module('AngularDragAndDropExample', ['ngDraggable']);

AngularDragAndDropExample.controller('DragDropController', DragDropController);
AngularDragAndDropExample.factory('DragDropService', ['$http', DragDropService] );