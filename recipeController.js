(function(){
'use strict';
 angular.module("recipeModule",['ngRoute']);
    
    var RecipeController= function($scope,RecipeService){ 
        $scope.sort="name";
        $scope.reverse=false;

        function init(){ // when controller loads 1st time            
            $scope.recipes=RecipeService.getRecipe();
        }
        init();

            
        $scope.doSort=function(propName){                   
                 $scope.sortBy=propName;
                 $scope.reverse=!$scope.reverse;
        }; 
    };

    var RecipeService=function(){
    var recipes=[
                        {
                            name:'SPECIAL KABAB PLATTER',
                            image:'images/kababPlatter.jpg',
                            category:'Appitizer',
                            lable:'hot',
                            price:'10.99',
                            ingradients:'Shrimps, Lamb Seekh Kabab, and Chicken Tikka sauteed with onions, bell peppers, and fresh spices', 
                            comment:'' 
                        }, 

                        {
                            name:'PANEER MAKHANI',
                            image:'images/paneerMakhani.jpg',
                            category:'Mains',
                            lable:'',
                            price:'4.99',
                            ingradients:' Homemade cottage cheese cooked with fresh tomato sauce, butter and mild Indian spices unique combination of indian and italian pizza', 
                            comment:''  
                        },

                        {

                            name:'VEGETABLE PAKORA',
                            image:'images/vegPlatter.jpg',
                            category:'Appitizer',
                            lable:'New',
                            price:'1.99',
                            ingradients:'Mixed Vegetable fritters bound in a delicious chickpea flour batter', 
                            comment:''   
                        },
                        
                        {
                            name:'GULAB JAMUN',
                            image:'images/gulabJamun.jpg',
                            category:'Dessert',
                            lable:'sweet',
                            price:'4.99',
                            ingradients:'Dry milk and cottage cheese balls, deep in honey syrup and rose water', 
                        }

            ];
                     
        this.getRecipe=function(){
            return recipes;
        };
        
    };

    angular.module("recipeModule")
            .controller("RecipeController",RecipeController)
            .service("RecipeService",RecipeService)
            .config(function($routeProvider){

                                                $routeProvider
                                                    .when('/',{
                                                        templateUrl: '../Resume/draftsites/menu.html',           
                                                        controller: 'RecipeController'})               
                                                    .otherwise({ redirectTo:'/' });
                                            }
            );

    
})();
    





    