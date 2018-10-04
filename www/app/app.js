angular.module("eliteApp", ["ionic", "angular-cache"])

.run(function($ionicPlatform, CacheFactory) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs).
      // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
      // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
      // useful especially with forms, though we would prefer giving the user a little more room
      // to interact with the app.
      if (window.cordova && window.Keyboard) {
        window.Keyboard.hideKeyboardAccessoryBar(true);
      }
  
      if (window.StatusBar) {
              StatusBar.styleDefault();
              StatusBar.backgroundColorByHexString('#0a83a6');
      }
    });
    CacheFactory.createCache("leagueDataCache", {storageMode: "localStorage", maxAge: 3.6e+6, deleteOnExpire: "aggressive"});
    CacheFactory.createCache("leaguesCache", {storageMode: "localStorage", maxAge: 3.6e+6, deleteOnExpire: "aggressive"});
    CacheFactory.createCache("myTeamsCache", {storageMode: "localStorage"});
    CacheFactory.createCache("staticCache", {storageMode: "localStorage"});
  })

  .config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {
    $ionicConfigProvider.views.maxCache(0);


    $stateProvider
  
      .state('home', {
          abstract: true,
          url: '/home',
          templateUrl: 'app/home/home.html'
      })
      .state('home.leagues', {
          url: '/leagues',
          views: {
              "tab-leagues": {
                  templateUrl: 'app/home/leagues.html'
              }
          }

      })
      .state('home.myteams', {
          url: '/myteams',
          views: {
              "tab-myteams": {
                  templateUrl: 'app/home/myteams.html'
              }
          }
      })
      .state('app', {
          abstract: true,
          url: '/app',
          templateUrl: 'app/layout/menu-layout.html'
      })
      .state('app.teams', {
          url: '/teams',
          views: {
              "mainContent": {
                  templateUrl: 'app/teams/teams.html'
              }
          }
      })
      .state('app.team-detail', {
          url: '/teams/:id',
          views: {
              "mainContent": {
                  templateUrl: 'app/teams/team-detail.html'
              }
          }
      })
      .state('app.game', {
          url: '/game/:id',
          views: {
              "mainContent": {
                  templateUrl: 'app/game/game.html'
              }
          }
      })
      .state('app.standings', {
          url: '/standings',
          views: {
              "mainContent": {
                  templateUrl: 'app/standings/standings.html'
              }
          }
      })
      .state('app.locations', {
          url: '/locations',
          views: {
              "mainContent": {
                  templateUrl: 'app/locations/locations.html'
              }
          }
      })
      .state('app.rules', {
          url: '/rules',
          views: {
              "mainContent": {
                  templateUrl: 'app/rules/rules.html'
              }
          }
      });

    $urlRouterProvider.otherwise('/home/leagues');



});