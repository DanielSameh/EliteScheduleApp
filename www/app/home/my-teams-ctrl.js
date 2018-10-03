(function () {
    'use strict';

    angular.module('eliteApp').controller('MyTeamsCtrl', ['$state', 'eliteApi', 'myTeamsService', MyTeamsCtrl]);

    function MyTeamsCtrl($state, eliteApi, myTeamsService) {
        var vm = this;

        vm.myTeams = myTeamsService.getFollowedTeams();

        console.log(vm.myTeams);

        vm.goToTeam = function (team) {
            console.log(team);
            console.log(team.leagueId);
            eliteApi.setLeagueId(team.leagueId);
            $state.go("app.team-detail", { id: team.id});
        }
    }
})();