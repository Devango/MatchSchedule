var AngularDragAndDropExample = angular.module('AngularDragAndDropExample', ['ngDraggable','ui.bootstrap']);

AngularDragAndDropExample.controller('DragDropController', DragDropController);
AngularDragAndDropExample.factory('DragDropService', ['$http', DragDropService] );