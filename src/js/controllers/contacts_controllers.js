(function() {
	'use strict';

	angular
	.module('UiEmployee.Contacts', [])
	.controller('ContactsShowController', ContactsShowController)
	.controller('ContactsListController', ContactsListController)

	function ContactsShowController($routeParams, meuSite) {
		var vm = this;
		vm.contact = {};
		vm.contact.id = $routeParams.id;
		vm.next = "/contacts/" + (parseInt($routeParams.id) + 1);
		vm.previous = "/contacts/" + (parseInt($routeParams.id) - 1);
		vm.contact = meuSite.getItemById(vm.contact.id);
		// TODO : manage edges
		//$scope.item.next = ($routeParams.id < $rootScope.news.length-1) ? '/show/' + (parseInt($routeParams.id) + 1) : "#";
		//$scope.item.previous = ($routeParams.id > 0) ? '/show/' + (parseInt($routeParams.id) - 1) : "#";

	}

	function ContactsListController(meuSite) {
		var vm = this;
		vm.contacts = [];

		activate();

		function activate() {
			/* meumobiSite.getWebAppData()
			.then(function(response) {
				vm.business = response.data.business;
				vm.site = response.data.site;
			})
			.catch(function(response) {
				console.log(response);
			})*/
		}
		
	  vm.contacts = meuSite.getItems();
	}
})();