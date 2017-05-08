/**
 * Created by rakes on 4/25/2017.
 */
(function(){
    'use strict'
    angular.module('MenuApp').component('categoryDetails',{
        templateUrl : 'src/restaurantlist/templates/categorydetails.template.html',
        bindings :{
            category:'<'
        }
    });


})();