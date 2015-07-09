	var searchApp = angular.module("templateSearch",[]);

	searchApp.controller("searchController",function($scope,$http,$filter){
	
	
	$http({
            method: 'GET',
            url: 'http://www.w3schools.com/angular/customers.php'
        }).success(function (result) {
        $scope.searchAccounts = result.records;
    });
	

	$scope.selectList = function($event) {
		angular.element(".selectedlist").css('display','block');
		var m = $event.target.innerHTML;
		var date = new Date();
    	var dateTime = $filter('date')(new Date(), 'yyyy-MM-dd HH:mm');
	
		angular.element(".selectedlist ul").prepend("<li>" + m + dateTime +"</li>");
		
    };
	
	
	angular.element('.filterList').keyup(function(event) {
	if(event.which==13)
	{	angular.element(".selectedlist").css('display','block');
	  	var text = angular.element(this).val();
		var date = new Date();
    	var dateTime = $filter('date')(new Date(), 'yyyy-MM-dd HH:mm');		
		angular.element(".selectedlist ul").prepend("<li>" + text + dateTime +"</li>");
	}
	
	});
	
	
});
	
	angular.element(".searchField").on("focus",function() {
		angular.element(".searchItem").css({
			"background-color":"#eee"
			});
		angular.element(".sortlist").css({
			"display":"block"
			});
	}).on("blur",function(){
		  if (angular.element(this).val().length === 0 ) {
			angular.element(".searchItem").css({
			"background-color":"#fff"
			});

			}
		
		});
	
	angular.element(".filterList").on("blur",function() {
		angular.element(".searchItem").css({
			"background-color":"#fff"
			});
		setTimeout(function(){
			angular.element(".sortlist").fadeOut('medium')}, 200);
	});
