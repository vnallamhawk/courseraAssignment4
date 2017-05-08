/**
 * Created by rakes on 4/23/2017.
 */
(function(){
    'use strict';
angular.module('data').service('MenuDataService',MenuDataService)
    .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/categories.json");
MenuDataService.$inject = ['$http','$q','ApiBasePath'];
function MenuDataService($http,$q,ApiBasePath){
    // var deferredObject = $q.defer();
    //
    // $http.get(ApiBasePath)
    //     .then(function (result) {
    //         console.log(result.data);
    //             deferredObject.resolve(result.data);
    //
    // },
    // function(errorMsg){
    //     deferredObject.reject(errorMsg);
    // })


    // console.log("inside");
    var service = this;
    var categories =[];
    service.getAllCategories =function(){
        //var categories =[];
        return $http({
            method: "GET",
            url: ApiBasePath}).then(function (result) {
                //console.log(result.data);
             return result.data;
        })
        };

    service.getItemsForCategory =function(categoryShortName){
        console.log("woorking as expected");
        var requestURI ="https://davids-restaurant.herokuapp.com/menu_items.json";
        return $http({
            method: "GET",
            url: requestURI,
            params: {
                category: categoryShortName
            }
        });
    };

    //
    //
    //
    //return deferredObject.promise;
    }


})();