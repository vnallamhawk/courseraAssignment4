/**
 * Created by rakes on 4/24/2017.
 */
(function () {
    'use strict'
    angular.module('MenuApp').controller('RestCategoriesController',RestCategoriesController);
    RestCategoriesController.$inject = ['categories']  ;
    function RestCategoriesController(categories){
        var restaurantController = this;
        restaurantController.categories = categories;


    }

})();