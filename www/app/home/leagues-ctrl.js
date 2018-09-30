(function () {
    'use strict';

    angular.module('eliteApp').controller('LeaguesCtrl', ['$state', 'eliteApi', LeaguesCtrl]);

    function LeaguesCtrl($state, eliteApi) {
        var vm = this;
        vm.leagues  = eliteApi.getLeagues();
        vm.selectLeague =function (leagueId) {
            //Todo: select correct League
            $state.go("app.teams");
        }
    }
})();