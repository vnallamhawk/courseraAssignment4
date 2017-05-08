/**
 * Created by rakes on 4/23/2017.
 */
(function(){
'use strict';

angular.module('MenuApp').
    config(RoutesConfig);
RoutesConfig.$inject =['$stateProvider','$urlRouterProvider'];
function RoutesConfig($stateProvider,$urlRouterProvider) {

    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
        url: '/',
        templateUrl: 'src/restaurantlist/templates/home.template.html'
    })

    $stateProvider.state('categories', {
        url: '/categories',
        templateUrl: 'src/restaurantlist/templates/categories.template.html',
        controller : 'RestCategoriesController as restaurantController',
        resolve :{
            categories : ['MenuDataService', function (MenuDataService){
                return MenuDataService.getAllCategories();
            }]
        }
    });

    $stateProvider.state('categoryDetails', {
        url: '/category-detail/{shortName}',
        templateUrl: 'src/restaurantlist/templates/categorydetailsmain.html',
        controller : 'categoryDetailsController as categoryController',
        resolve :{
            categoryDetail : ['MenuDataService','$stateParams', function (MenuDataService,$stateParams){
                return MenuDataService.getItemsForCategory($stateParams.shortName);
            }]
        }

    });

}

})();