(function() {
	'use strict';

	angular
	.module('meumobi.services.MockAPI', [])
	.factory('meuSite', meuSite);

	function meuSite($log) {
		var service = {};
		var contacts = [
			{ id: 1, name: 'Fabricio Migues', work: '(11) 2102-0034', phone: '(11) 95048-6085', email: 'fmigues@visa.com', status: 'on', department: 'imprensa' },
			{ id: 2, name: 'Fernanda Francisco', work: '(11) 2102-0077', phone: '(11) 95050-0597', email: 'ffrancis@visa.com', status: 'on', department: 'imprensa' },
			{ id: 3, name: 'Sabrina Sciama', work: '(11) 2102-0021', phone: '(11) 99930-0170', email: 'ssciama@visa.com', status: 'on', department: 'imprensa' },
			{ id: 4, name: 'Byron Taylor', phone: '983487230', email: 'victor.dias@meumobi.com', status: 'on', department: 'Recursos humanos externos' },
			{ id: 5, name: 'Jana  Terry', phone: '983487230', email: 'victor.dias@meumobi.com', status: 'on', department: 'TI' },
			{ id: 6, name: 'Darryl  Stone', phone: '983487230', email: 'victor.dias@meumobi.com', status: 'on', department: 'TI' },
			{ id: 7, name: 'Fannie  Carlson', phone: '983487230', email: 'victor.dias@meumobi.com', status: 'on', department: 'TI' },
			{ id: 8, name: 'Holly Nguyen', phone: '983487230', email: 'victor.dias@meumobi.com', status: 'on', department: 'TI' },
			{ id: 9, name: 'Bill  Chavez', phone: '983487230', email: 'victor.dias@meumobi.com', status: 'on', department: 'TI' },
			{ id: 10, name: 'Veronica  Maxwell', phone: '983487230', email: 'victor.dias@meumobi.com', status: 'on', department: 'TI' },
			{ id: 11, name: 'Jessica Webster', phone: '983487230', email: 'victor.dias@meumobi.com', status: 'on', department: 'TI' },
			{ id: 12, name: 'Jackie  Barton', phone: '983487230', email: 'victor.dias@meumobi.com', status: 'on', department: 'TI' },
			{ id: 13, name: 'Crystal Drake', phone: '', email: '', status: 'absent' },
			{ id: 14, name: 'Milton  Dean', phone: '', email: '', status: 'absent' },
			{ id: 15, name: 'Joann Johnston', phone: '', email: '', status: 'absent' },
			{ id: 16, name: 'Cora  Vaughn', phone: '', email: '', status: 'absent' },
			{ id: 17, name: 'Nina  Briggs', phone: '', email: '', status: 'absent' },
			{ id: 18, name: 'Casey Turner', phone: '', email: '', status: 'absent' },
			{ id: 19, name: 'Jimmie  Wilson', phone: '', email: '', status: 'absent' },
			{ id: 20, name: 'Nathaniel Steele', phone: '', email: '', status: 'absent' },
			{ id: 21, name: 'Aubrey  Cole', phone: '', email: '', status: 'absent' },
			{ id: 22, name: 'Donnie  Summers', phone: '', email: '', status: 'absent' },
			{ id: 23, name: 'Kate  Myers', phone: '', email: '', status: 'absent' },
			{ id: 24, name: 'Priscilla Hawkins', phone: '', email: '', status: 'absent' },
			{ id: 25, name: 'Joe Barker', phone: '', email: '', status: 'absent' },
			{ id: 26, name: 'Lee Norman', phone: '', email: '', status: 'absent' },
			{ id: 27, name: 'Ebony Rice', phone: '', email: '', status: 'absent' }
		];
		
		service.getItems = function() {
			$log.log("meuSite getItems");
			return contacts;
		};
		
	// TODO : test catch() raising an error, is it useful ?  
		service.getItemById = function(id) {
			try {
					var i = 0,
					  len = contacts.length
					for (; i < len; ++i) {
						if (parseInt(contacts[i].id) === parseInt(id)) {
							return contacts[i];
						}
					};
					// If we made it this far, something went wrong.
					return ({});
			} catch (e) {
				$exceptionHandler(e);
			}
		}
 
		return service;	
	}
})();