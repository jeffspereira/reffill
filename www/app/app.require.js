require.config({
    urlArgs: "bust=" + new Date().getTime(),
    
    waitSeconds: 0,

	paths: {

        /** load firebase **/
        firebase: 'libs/js/firebase/3.7.4/firebase',

		/** load angular **/
		angular: 'libs/js/angularjs/1.5.6/angular.min',

        /** load angular fire **/
        angular_fire: 'libs/js/angularfire/2.3.0/angularfire.min',

		/** angular route **/
        angular_route: 'libs/js/angularjs/1.5.6/angular-route.min',

        /** angular mocks **/
        angular_mocks: 'libs/js/angularjs/1.5.6/angular-mocks',

        /** angular mocks **/
        angular_cookies: 'libs/js/angularjs/1.5.6/angular-cookies.min',

        /** angular sanitize **/
        angular_sanitize: 'libs/js/angularjs/1.5.6/angular-sanitize.min',

        /** load resource **/
        angular_resource: 'libs/js/angularjs/1.5.6/angular-resource.min',

        /** angular localization **/
        angular_localization: 'libs/js/angular-localization/1.2.1/angular-localization',

		/** load ocLazyLoad **/
		angular_ocLazyLoad: 'libs/js/oclazyload/1.1.0/ocLazyLoad.min',

        /** load ui_bootstrap **/
        angular_ui_bootstrap: 'libs/js/angular-ui-bootstrap/2.5.0/ui-bootstrap-tpls.min',


        /********* Required Controllers *****************/
        authController: 'components/auth/controllers/auth-controller',
        aboutController: 'components/about/controllers/about-controller',
        profileController: 'components/profile/controllers/profile-controller'

	},

	 // Mention the dependencies
    shim: {

        angular: {
            exports: 'angular'
        },

    	/** deps to angular_route **/
    	angular_route: {
            deps: ['angular']
        },

        /** deps to angular_mocks **/
        angular_mocks: {
            deps: ['angular']
        },

        /** deps to angular_cookies **/
        angular_cookies: {
            deps: ['angular']
        },

        /** deps to angular_sanitize **/
        angular_sanitize: {
            deps: ['angular']
        },

        /** deps to angular_localization **/
        angular_localization: {
            deps: ['angular']
        },

        /** deps to angular_ocLazyLoad **/
        angular_ocLazyLoad: {
            deps: ['angular']
        },

        /** deps to angular_ui_bootstrap **/
        angular_ui_bootstrap: {
            deps: ['angular']
        },

        angular_resource: {
            deps: ['angular']
        },

        angular_fire: {
            deps: ['angular','firebase']
        },

        /** deps to app **/
        app: {
        	deps: ['angular','angular_ocLazyLoad', 'angular_ui_bootstrap','firebase']
        },

        authController: {
            deps: ['app']
        },

    },

    deps:['app']


});


require(['angular','app'], function (app) {

  if(window.cordova){
    
    document.addEventListener("deviceready", onDeviceReady, false);
        function onDeviceReady() {
            angular.bootstrap(document, ['reffill']);
        }
   }else{
        angular.bootstrap(document, ['reffill']);
   }
   
});