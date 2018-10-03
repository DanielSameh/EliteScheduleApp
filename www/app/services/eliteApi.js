(function () {
    'use strict';

    angular.module('eliteApp').factory('eliteApi', ['$http', '$ionicLoading', 'CacheFactory', eliteApi]);

    function eliteApi($http, $ionicLoading, CacheFactory) {

        var self = this;

        self.leaguesCache = CacheFactory.get("leaguesCache");
        self.leagueDataCache = CacheFactory.get("leagueDataCache");

        self.leaguesCache.setOptions({
            onExpire: function (key, value){
                getLeagues()
                    .then(function () {
                        console.log("Leagues Cache was automatically refreshed ", new Date());
                    })
                    .catch(function (error) {
                        console.log("Error getting data. Putting expired item back in the cache.", new Date());
                        self.leaguesCache.put(key, value);
                    });
            }
        });

        self.leagueDataCache.setOptions({
            onExpire: function (key, value){
                getLeagues()
                    .then(function () {
                        console.log("League Data Cache was automatically refreshed ", new Date());
                    })
                    .catch(function (error) {
                        console.log("Error getting data. Putting expired item back in the cache.", new Date());
                        self.leaguesCache.put(key, value);
                    });
            }
        });

        self.staticCache = CacheFactory.get("staticCache");

        function setLeagueId(leaugeId) {
            self.staticCache.put("currentLeagueId", leaugeId);
        }

        function setLeagueName(leagueName) {
            self.staticCache.put("currentLeagueName", leagueName);
        }

        function getLeagueId() {
            return self.staticCache.get("currentLeagueId");
        }

        function getLeagues() {
           var cacheKey = "leagues";
           var leaguesData = self.leaguesCache.get(cacheKey);

           if(leaguesData) {
               console.log("found data inside cache", leaguesData);
               return Promise.resolve(leaguesData);
           }
           else {
               $ionicLoading.show({ template: 'Loading...'});
               return $http.get("http://elite-schedule.net/api/leaguedata")
                   .then(function (res) {
                       console.log("Received schedule data via HTTP");
                       self.leaguesCache.put(cacheKey, res.data);
                       $ionicLoading.hide();
                       return res.data;
                   })
                   .catch(function (error) {
                       $ionicLoading.hide();
                       console.log(error);
                       return Promise.reject(error);
                   });
           }
       }


       function getLeagueData (forceRefresh) {
            if (typeof forceRefresh ==="undefined") {
                forceRefresh = false;
            }


           var cacheKey = "leagueData" + getLeagueId();
           var leagueData = null;

           if(!forceRefresh) {
               leagueData = self.leagueDataCache.get(cacheKey);
           }

           if(leagueData) {
               console.log("found data inside cache", leagueData);
               return Promise.resolve(leagueData);
           }
           else{
               $ionicLoading.show({ template: 'Loading...'});
               return $http.get("http://elite-schedule.net/api/leaguedata/" + getLeagueId())
                   .then(function (res) {
                       console.log("Received schedule data via HTTP");
                       self.leagueDataCache.put(cacheKey, res.data);
                       $ionicLoading.hide();
                       return res.data;
                   })
                   .catch(function (error) {
                       $ionicLoading.hide();
                       console.log(error);
                       return Promise.reject(error);
                   });
           }

       }

       return {
           getLeagues: getLeagues,
           getLeagueData: getLeagueData,
           setLeagueId: setLeagueId,
           setLeagueName: setLeagueName
       }
    }
})();