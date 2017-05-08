/**
 * Created by rakes on 4/25/2017.
 */
(function () {
    'use strict'
    angular.module('MenuApp').controller('categoryDetailsController',categoryDetailsController);
    categoryDetailsController.$inject = ['categoryDetail']  ;
    function categoryDetailsController(categoryDetail){
        var categoryController = this;
        categoryController.categoryDetail = categoryDetail.data.menu_items;
    }
})();