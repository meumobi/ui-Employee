angular.module('UiEmployee', [
  'ngRoute',
	'ngAnimate',
  'mobile-angular-ui',
	'mobile-angular-ui.gestures.swipe',
  'UiEmployee.controllers.Main',
	'UiEmployee.Contacts',
	'meumobi.services.MockAPI'
])

.config(function($routeProvider) {
  $routeProvider.when('/', {
		templateUrl: 'home.html',
		title: 'Home',
		reloadOnSearch: false
	});
	$routeProvider.when('/contacts', {
		controller: 'ContactsListController',
		controllerAs: 'vm',
		templateUrl: 'contacts/list.html',
		title: 'Contacts',
		reloadOnSearch: false
	});
	$routeProvider.when('/contacts/:id', {
		controller: 'ContactsShowController',
		controllerAs: 'vm',
		templateUrl: 'contacts/show.html',
		title: 'Contacts',
		reloadOnSearch: false
	});
})

.config(function($logProvider) {
	$logProvider.debugEnabled(true);
})

.config(
	function configureAnimate( $animateProvider ) {
		$animateProvider.classNameFilter( /\banimated\b/ );
	}
)


.animation('.slide', ['$animateCss', '$rootScope', '$log', 'SharedState', function($animateCss, $rootScope, $log, SharedState) {
	var transition = {
		"slide-left": {
			enter: "slideInRight",
			leave: "slideOutLeft"
		},
		"slide-right": {
			enter: "slideInLeft",
			leave: "slideOutRight"
		}
	}

	return {
		enter: function(element, done) { 
			$log.debug(".animation SharedState: " + SharedState.get("transition"));
			if (SharedState.get("transition")) {
				var transform = transition[SharedState.get("transition")];
					return $animateCss(element, {
						event: 'enter',
						structural: true,
						addClass: transform.enter
					}).start().done(function() {
						$log.debug("done enter " + transform.enter);
						$log.debug(SharedState.values());
						done();
					})
			} else {
				return $animateCss(element, {}).start().done(function() {
					$log.debug("Nothing done");
					done();
				})
			}
		},
		leave: function(element, done) {
			$log.debug(".animation SharedState: " + SharedState.get("transition"));
			if (SharedState.get("transition")) {
				var transform = transition[SharedState.get("transition")];
					return $animateCss(element, {
						event: 'leave',
						structural: true,
						addClass: transform.leave,
					}).start().done(function() {
						$log.debug("done leave " + transform.leave);
						done();
					})
			} else {
				return $animateCss(element, {}).start().done(function() {
					$log.debug("Nothing done");
					done();
				})
			}
		}
	}
	
}])

.run(function($rootScope, $location, $animateCss, SharedState, $log) {
		
  $rootScope.go = function(path, transition) {
		$log.info(transition);
			//if (window.indexedDB) { alert('WKWebView'); } else { alert('UIWebView'); }
		/*
		if (transition == 'slide-left') {
			var el = document.getElementsByClassName('slide');
			$log.debug(el);
			var animator = $animateCss(el, {
				event: 'enter',
        structural: true,
				from: { border:'20px solid red' },
			  to: { background:'10 px solid blue' },
				duration: "2s"
			})
	
			animator.start().done();
		}
		*/
		
		SharedState.set("transition", transition); 
		$location.path(path);
  }; 
});  