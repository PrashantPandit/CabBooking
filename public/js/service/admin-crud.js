module.exports = function($http) {

  this.myFunc = function (x) {
    return x.toString(16);
  }


  var _this = this;

   _this.getData = function (serviceName) {

     return $http ({
       method: 'GET',
       url:`/${serviceName}/get${serviceName.substr(0,1).toUpperCase()+serviceName.substr(1)}`
     })
     .then(function(response){
       return response.data;
     })
     .catch(function(error){

       throw error;
     });
   };

   _this.addData = function(model, serviceName){

     return $http({
       method:'POST',
       url:`/${serviceName}/add${serviceName.substr(0,1).toUpperCase()+serviceName.substr(1)}`,
       data: model,
     })
     .then(function(response){
       return response.data;
     })
     .catch(function(error){
       throw error;
     });
   };

   _this.deleteData = function (model, serviceName) {


          return $http.delete(`/${serviceName}/delete${serviceName.substr(0,1).toUpperCase()+serviceName.substr(1)}/${model._id}` )

        .then(function(response) {
            return response.data;
        })
        .catch(function(error) {
            throw error;
        });
    };

     _this.editData = function (model, serviceName) {

          return $http({
            method: 'GET',
            url: `/${serviceName}/get${serviceName.substr(0,1).toUpperCase()+serviceName.substr(1)}/${model._id}`
        })
        .then(function(response) {
            return response.data;
        })
        .catch(function(error) {

            throw error;
        });
    };

    _this.updateData = function (model, serviceName) {

          return $http({
            method: 'PUT',
            url: `/${serviceName}/update${serviceName.substr(0,1).toUpperCase()+serviceName.substr(1)}/${model._id}`,
            data: model
        })
        .then(function(response) {
            return response.data;
        })
        .catch(function(error) {

            throw error;
        });
    };


}
