var myapp=angular.module('findapp',[]);

       myapp.config(['$httpProvider', function($httpProvider) {
                $httpProvider.defaults.userDomain = true;   
                delete  $httpProvider.defaults.headers.common['X-Requested-With'];                
            }
       ]);

       myapp.controller('produtosController',['$scope','$http', function($scope,$http){
           $scope.base_url="http://localhost:8150/RestfulAplicationServerCRUDExemple/produtos/";

  	   		$http.get($scope.base_url+'findall').success(function (response){
                  $scope.result = response.produtos;                                  
  	        });

          $scope.add= function(){

               $http.post($scope.base_url+"add", $scope.produto).success(function(response){
                    $http.get($scope.base_url+'findall').success(function (response){
                           $scope.result = response.produtos;  
                           alert(response);
                    });
                     
               });
          };

          $scope.del= function(id){

               var resultado= confirm("Tem certesa que deseja escluir?");
               if(resultado===true)
               $http.delete($scope.base_url+"delete/"+ id).success(function(resp){
            	   $http.get($scope.base_url+'findall').success(function (response){
                       $scope.result = response.produtos;  
                       
                   });
            	   alert(resp);
               });
          };

          $scope.edit= function(dados){
               $scope.produto=dados;
          };
          $scope.update= function(){
              $http.put($scope.base_url+'editar',$scope.produtos).success(function (response){
            	  $http.get($scope.base_url+'findall').success(function (response){
            		  alert(response); 
                  });                            
              });
          };
          
         
          


       }]);

       