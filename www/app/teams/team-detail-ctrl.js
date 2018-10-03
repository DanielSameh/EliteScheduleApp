(function () {
    'use strict';

    angular.module('eliteApp').controller('TeamDetailCtrl', ['$stateParams','eliteApi', '$ionicPopup', 'myTeamsService', TeamDetailCtrl]);

    function TeamDetailCtrl($stateParams, eliteApi, $ionicPopup, myTeamsService) {
        var vm = this;
        vm.teamId = Number($stateParams.id);

        eliteApi.getLeagueData()
                .then(function (data) {
                    var team = _.chain(data.teams)
                        .flatten("divisionTeams")
                        .find({"id": vm.teamId})
                        .value();

                    vm.team = team;
                    vm.team.leagueId = data.league.id;

                    vm.teamName = team.name;

                    vm.games = _.chain(data.games)
                        .filter(isTeamInGame)
                        .map(function(item) {
                            var isTeam1 = item.team1Id === vm.teamId;
                            var opponentName = isTeam1 ? item.team2: item.team1;
                            var scoreDisplay = getScoreDisplay(isTeam1, item.team1Score, item.team2Score);
                            return {
                                gameId: item.id,
                                opponent: opponentName,
                                time: item.time,
                                location: item.location,
                                locationUrl: item.locationUrl,
                                scoreDisplay: scoreDisplay,
                                homeAway: (isTeam1 ? "vs." : "at")
                            }
                        })
                        .value();


                    vm.teamStandings = _.chain(data.standings)
                        .flatten("divisionStandings")
                        .find({ "teamId": vm.teamId})
                        .value();
                });



        vm.following = myTeamsService.isFollowingTeam(vm.teamId);

        vm.toggleFollow = function () {
            if(vm.following) {
                var confirmPopup = $ionicPopup.confirm({
                    title: 'unfollow?',
                    template: 'Are you sure you want to unfollow?'
                });

                confirmPopup.then(function(res){
                    if(res) {
                        myTeamsService.unfollowTeam(vm.teamId);
                        vm.following = !vm.following;
                    }
                })
            }
            else{
                myTeamsService.followTeam(vm.team);
                vm.following = !vm.following;

            }
        };


        function isTeamInGame(item){
            return item.team1Id === vm.teamId || item.team2Id === vm.teamId;
        }
        
        function getScoreDisplay(isTeam1, team1Score, team2Score) {
            if(team1Score && team2Score) {
                var teamScore = (isTeam1 ? team1Score : team2Score);
                var opponentScore = (isTeam1 ? team2Score : team1Score);
                var winIndicator = teamScore > opponentScore ? "W: " : "L: ";
                return winIndicator + teamScore + "-" + opponentScore;
            }
            else {
                return "";
            }
        }
        
    }
})();