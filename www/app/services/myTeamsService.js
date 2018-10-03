(function () {
    'use strict';

    angular.module('eliteApp').factory('myTeamsService', ['CacheFactory', myTeamsService]);

    function myTeamsService( CacheFactory) {

        var self = this;
        self.myTeamsCache = CacheFactory.get("myTeamsCache");
        self.staticCache = CacheFactory.get("staticCache");

        function followTeam(team) {
            team.leagueName = self.staticCache.get("currentLeagueName");
            self.myTeamsCache.put(team.id.toString(), team);
        }

        function unfollowTeam(teamId) {
            self.myTeamsCache.remove(teamId.toString());
        }

        function getFollowedTeams() {
            var teams = [];
            var keys = self.myTeamsCache.keys();

            for(var i = 0; i< keys.length; i++){
                var team = self.myTeamsCache.get(keys[i]);
                teams.push(team);
            }
            console.log(teams);
            return teams;
        }

        function isFollowingTeam(teamId) {
            var team = self.myTeamsCache.get(teamId.toString());
            return team;
        }

        return {
            followTeam: followTeam,
            unfollowTeam: unfollowTeam,
            getFollowedTeams: getFollowedTeams,
            isFollowingTeam: isFollowingTeam
        }
    }
})();