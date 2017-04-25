(function(){
    'use strict'
    angular.module('MenuApp').component('restaurantCategories',{
    templateUrl : 'src/restaurantlist/templates/categoriesdisplay.template.html',
        bindings :{
            categoriesComp:'<'
        }
    });


})();