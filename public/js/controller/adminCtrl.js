'use strict';

module.exports = function($scope, $http, $filter, AdminCrud){

     var collections = ['cabr'];


     var dataRefresh = function(collections) {
            collections.forEach(function(collection){
              var promise = AdminCrud.getData(collection);
              promise.then(function(data){
                $scope[`${collection}List`] = data;
                $scope[collection] = "";
              })
            });
     };

     dataRefresh(collections);


     $scope.addData = function(model) {
        var serviceName = (Object.keys(model)[0]).substring(0,4);
        var promise = AdminCrud.addData(model, serviceName);
        promise.then(function(data){
          dataRefresh([serviceName]);
        })
      }

      $scope.deleteData= function(model){
      var serviceName = (Object.keys(model)[1]).substring(0,4);
      var promise =  AdminCrud.deleteData(model, serviceName);
      promise.then(function(data){
        dataRefresh([serviceName]);
      })
      }

      $scope.editData = function(model){
        var serviceName = (Object.keys(model)[1]).substring(0,4);
        var promise =  AdminCrud.editData(model, serviceName);
        promise.then(function(data){
        $scope[serviceName] = data[0];
        })
      }

      $scope.updateData = function(model){
        var serviceName = (Object.keys(model)[1]).substring(0,4);
        var promise =  AdminCrud.updateData(model, serviceName);
        promise.then(function(data){
        dataRefresh([serviceName]);
        })
      }


}
