import angular from 'angular';
import { DxButtonModule } from 'devextreme-angular';
 
var mainApp = angular.module('mainApp', [DxButtonModule]);
mainApp.controller('appController',  ['$scope', function ($scope) {
    $scope.title ='Hello Angular';
}]
)