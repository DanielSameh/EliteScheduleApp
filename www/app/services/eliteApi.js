(function () {
    'use strict';

    angular.module('eliteApp').factory('eliteApi', [ eliteApi]);

    function eliteApi() {
        var leagues = [
            {
                "id": 2029,
                "name": "6th Grade Saturday 2014-15 League",
                "isDirty": false,
                "homeScreen": "Use the nav bar at the top to view the schedule by team and schedule by location (as well as directions).\n\n*\tThis League is designed for 6th Grade “B” Travel teams, and higher-level 5th Grade AAU caliber teams.\n*\t8 game minimum (will try to get 9 games scheduled if possible) plus/season ending tournament.  Plan is to end on February 28th.\n*\tSeason to start December 13th.\n*\tGames to be played at Centennial High School.\n*\tGame times 2pm and later.\n*\tMinimum 6 teams required.\n*\t$635 per team registration fee (includes referees fees).\n*\tAwards for 1st & 2nd Place in season ending tournament.\n*\t**All teams will be required to submit team rosters prior to the first game of the season.  Players must be in 5th/6th Grade and/or born after August 31, 2002.**\n\nHave a great season!\n\n**Inclement weather**: Inclement weather procedure depends on your location. Based on your game location, call:\n\n* Inclement Weather Hotline for Howard County Schools: 410-313-6827",
                "rulesScreen": "### HS Federation rules will be used except where noted: ###\n\n\n*\tThe first team listed (under V) on the schedule is considered VISITORS and should wear Dark Jerseys. Second team listed (under H) is HOME and wears White (light) jerseys.\n*\tHome Team Provides game Ball – It should be a NFHS approved 28.5 indoor game ball. If the Home team does not have a NFHS approved ball the Away team can provide a NFHS game ball.\n*\tEach team must provide a team representative at the scorer’s table for their game. One team covers the book; the other team covers the clock.\n*\t20 minute halves. Running Clock except last 1 minute of first half, last 2 minutes of game and all time outs.\n*\tTwo 45 second timeouts per half - Timeouts don’t carry-over from 1st half to 2nd half.\n*\t**Free Throw Bonus**: We’re trying to minimize wasting playing time shooting fouls shots while the clock runs. \n*\t**1st half**, NO 1-n-1 bonus at 7 fouls. 2 shot bonus will be shot at 10th foul. \n*\t**2nd Half**, Same as first half, except when we get to 2 minutes and we are in “stop clock” mode. So, 2 minutes or less in 2nd half, we go to 1-n-1 bonus at 7 fouls. So if there are 3 minutes left in the 2nd half, with 7, 8 or 9 fouls, we are not shooting 1-n-1. If there are 2 minutes or less in the second half with 7, 8 or 9 fouls, we “are” shooting 1-n-1.\n*\tNo pressing or half-court trapping after lead reaches 20 points. Team gets 2 warnings. On third violation, a Team Technical assessed (not counted against individual player) where offense get automatic 2 points and ball at half court.\n*\t2 behavior related technical fouls result in removal from current and next game.\n*\tNo technical fouls for book errors. Just correct the mistake and move on.\n*\tTeams can start game with 4 players. If you have 4 players available at game time, the game must start.\n*\tOvertime - One 2 minute OT. Teams get one additional timeout in OT, two maximum. If still tied after OT, the 10 players on the court immediately go into a “foul shooting shootout.” Players from each team alternate shooting one foul shot, one player at a time. All ten players shoot. If one team has made more shots than the other team after 10 shots, that team wins. If tied after all 10 players shoot, go back to first players until one team makes it and the other misses. This is similar to a soccer shootout. This is only for regular season. Normal O/Ts in playoffs, not shootout.\n*\tThe League Commissioner, Chris Steinbach (410-924-4324) will settle all disputes and rule interpretations. If Chris can’t be reached, the lead official will settle disputes or rules interpretations.",
                "isArchived": false,
                "isActive": true
            },
            {
                "id": 2024,
                "name": "7th Grade MS JV Friday 2014-15 League",
                "isDirty": false,
                "homeScreen": "###Games that were cancelled from Friday 3/6 at Dunloggin and Mayfield Woods are now Monday, 3/9 at Veterans ES and Ellicott Mills MS.  See detailed schedule below. \n### \n\n# Playoff Brackets\n\n## Division 1 Bracket\n![Division 1 Playoffs](https://dl.dropboxusercontent.com/u/20432002/elite-schedule/leagues-2014-15/fri-jv-2015-d1.png)\n\n## Division 2 Bracket\n![Division 2 Playoffs](https://dl.dropboxusercontent.com/u/20432002/elite-schedule/leagues-2014-15/fri-jv-2015-d2.png)\n\n## Division 3 Bracket\n![Division 3 Playoffs](https://dl.dropboxusercontent.com/u/20432002/elite-schedule/leagues-2014-15/fri-jv-2015-d3.png)\n",
                "rulesScreen": "### HS Federation rules will be used except where noted: ###\n\n* The first team listed on the schedule is considered HOME and should wear white (light). Second team listed is away and wears dark jerseys.\n* Home Team Provides game Ball – It should be a NFHS approved 29.5 indoor game ball. If the Home team does not have a NFHS approved ball the Away team can provide a NFHS game ball.\n* **For games not at Meadowbrook, each team must provide a team representative at the scorer’s table for their game. One team covers the book; the other team covers the clock.** Score table persons are provided at Meadowbrook.\n* 20 minute halves. Running Clock except last 1 minute of first half, last 2 minutes of game and all time outs.\n* Two 45 second timeouts per half - Timeouts don’t carry-over from 1st half to 2nd half.\n* **Free Throw Bonus:** We’re trying to minimize wasting playing time shooting fouls shots while the clock runs.   \n**1st half**, NO 1-n-1 bonus at 7 fouls. 2 shot bonus will be shot at 10th foul.  \n**2nd Half**, Same as first half, except when we get to 2 minutes and we are in “stop clock” mode. So, 2 minutes or less in 2nd half, we go to 1-n-1 bonus at 7 fouls.\nSo if there are 3 minutes left in the 2nd half, with 7, 8 or 9 fouls, we are not shooting 1-n-1. If there are 2 minutes or less in the second half with 7, 8 or 9 fouls, we “are” shooting 1-n-1.\n* No pressing or half-court trapping after lead reaches 20 points. Team gets 2 warnings. On third violation, a Team Technical assessed (not counted against individual player) where offense get automatic 2 points and ball at half court.\n* 2 behavior related technical fouls result in removal from current and next game.\n* No technical fouls for book errors. Just correct the mistake and move on.\n* Teams can start game with 4 players. If you have 4 players available at game time, the game must start.\n* **Overtime** - One 2 minute OT. Teams get one additional timeout in OT, two maximum. If still tied after OT, the 10 players on the court immediately go into a “foul shooting shootout.” Players from each team alternate shooting one foul sho,t one player at a time. All ten players shoot. If tied after all 10 players shoot, go back to first players until one team makes it and the other misses. This is similar to a soccer shootout. This is only for regular season. Normal O/Ts in playoffs, not shootout.\n\nThe League Commissioner, will settle all disputes and rule interpretations. If Bill Nap or Steve Michelotti can’t be reached, the lead official will settle dispute or rules.",
                "isArchived": false,
                "isActive": true
            },
            {
                "id": 2025,
                "name": "7th Grade MS JV Saturday 2014-15 League",
                "isDirty": false,
                "homeScreen": "# Playoff Brackets\n\n## Travel Team Bracket\n![Travel Playoffs](https://dl.dropboxusercontent.com/u/20432002/elite-schedule/leagues-2014-15/sat-jv-2015-d1.png)\n\n## Middle School Only Bracket\n![MS Only Playoffs](https://dl.dropboxusercontent.com/u/20432002/elite-schedule/leagues-2014-15/sat-jv-2015-ms-only.png)\n",
                "rulesScreen": "### HS Federation rules will be used except where noted: ###\n\n* The first team listed on the schedule is considered HOME and should wear white (light). Second team listed is away and wears dark jerseys.\n* Home Team Provides game Ball – It should be a NFHS approved 29.5 indoor game ball unless 2 6th grade teams are playing and they agree to use 28.5. If the Home team does not have a NFHS approved ball the Away team can provide a NFHS game ball.\n* **For games not at Meadowbrook, each team must provide a team representative at the scorer’s table for their game. One team covers the book; the other team covers the clock.** Score table persons are provided at Meadowbrook.\n* 20 minute halves. Running Clock except last 1 minute of first half, last 2 minutes of game and all time outs.\n* Two 45 second timeouts per half - Timeouts don’t carry-over from 1st half to 2nd half.\n* **Free Throw Bonus:** We’re trying to minimize wasting playing time shooting fouls shots while the clock runs.   \n**1st half**, NO 1-n-1 bonus at 7 fouls. 2 shot bonus will be shot at 10th foul.  \n**2nd Half**, Same as first half, except when we get to 2 minutes and we are in “stop clock” mode. So, 2 minutes or less in 2nd half, we go to 1-n-1 bonus at 7 fouls.\nSo if there are 3 minutes left in the 2nd half, with 7, 8 or 9 fouls, we are not shooting 1-n-1. If there are 2 minutes or less in the second half with 7, 8 or 9 fouls, we “are” shooting 1-n-1.\n* No pressing or half-court trapping after lead reaches 20 points. Team gets 2 warnings. On third violation, a Team Technical assessed (not counted against individual player) where offense get automatic 2 points and ball at half court.\n* 2 behavior related technical fouls result in removal from current and next game.\n* No technical fouls for book errors. Just correct the mistake and move on.\n* Teams can start game with 4 players. If you have 4 players available at game time, the game must start.\n* **Overtime** - One 2 minute OT. Teams get one additional timeout in OT, two maximum. If still tied after OT, the 10 players on the court immediately go into a “foul shooting shootout.” Players from each team alternate shooting one foul sho,t one player at a time. All ten players shoot. If tied after all 10 players shoot, go back to first players until one team makes it and the other misses. This is similar to a soccer shootout. This is only for regular season. Normal O/Ts in playoffs, not shootout.\n\nThe League Commissioner, will settle all disputes and rule interpretations. If Bill Nap or Steve Michelotti can’t be reached, the lead official will settle dispute or rules.",
                "isArchived": false,
                "isActive": true
            },
        ];

        var leagueData = {
            "league": {
                "name": "March Madness Tournament 2016",
                "id": 3041,
                "homeScreen": "<h2>Use the tabs above to view the schedule, rules, standings etc</h2> \n\nTournament Championship games are Sunday afternoon or evening\n\t\t\t\t\t\n- \t**3rd grade Champions: TEAM RUSH 34 - 28 over MADISON**\n- \t**4th grade Champions: Madison 30 - 24 over Team Melo**\n- \t**5th grade Champions: Ravens 5th 42 - 26 over 1 Up Warriors**\n- \t**6th grade Champions: Randallstown Running Rebels 44 - 31 over MD Playmakers**\n- \t**7th grade White Champions: MD Finest 52 - 37 over HC Elite white**\n- \t**7th grade-Green Champions: Sharks Red 33 - 32 overRavens Black**\n- \t**8th grade Champions: Madison 52 - 42 over HC Elite white**\n- \t**9th grade White Champions: Balt United Red 57 - 52 over AA Ballhawks**\n- \t**HS Champions: Franklin Force 10th 56 - 54 over Team Sizzle**",
                "rulesScreen": "**HS Federation rules except where noted.**\n\t\t\t\t\t\n- The 1st team listed on the schedule is Home and wears White.  The 2nd team is Away and wears Dark.  \n- Two 45 second timeouts per half -   T/Os don’t carry-over from 1st half to 2nd half.  \n- 20 minute halves.  Clock stops on all whistles the last 1 minute of first half and last 2 minutes of 2nd half. \n- No 1-and-1 bonus in 1st half, but still shoot 2 shot bonus at 10 fouls. \n- Shoot normal 1-and-1 bonus at 7 fouls in Second half. \n- No pressing or half-court trapping after lead reaches 15 pts (5th and younger) 20 pts (6th and Older). \n- 2 behavior related technical fouls in the same game or any ejection will result in removal from current ,and next game as well as any other remaining games that day.\n- No technical fouls for book errors.  Just correct the mistake and move on.\n- Teams can start game with 4 players.  If you have 4 players available at game time, the game must start.\n- No dunking at sites where \"No Dunking\" is posted on the backboards. \n\n- Overtime* –One 2 minute OT.  One timeout per team in OT.\n-If still tied after One OT, Penalty Shoot-out (Soccer Style):\n•\tCoach Selects Order of 5 shooters, MUST be the players on court at end of OT.\n•\tAlternate Shooting ONE Free Throw, Best of 5 Shooters.\n•\tIF tied after 5 shooters repeat in same order until one team makes a shot and one misses a shot.\n*Championship Game: One 3-minute overtime. If still tied after one OT, consecutive 2 minute OT’s until there is a winner\n\n<br/>The following will be used to determine top two teams for the Championship game:\n<br/>- Overall Record (Wins vs. Losses)\n<br/>-- Head to Head (For 2-way tie or 3-way tie if one team beat other two)\n<br/>- Record vs Teams tied. \n<br/>- Point Differential vs Teams tied (max 15 points per game)\n<br/>- Overall Point Differential (max 15 point per game)\n<br/>- Coin Flip\n<br/>*In age groups with multiple divisions, the top team from each division will advance based on the above criteria*"
            },
            "teams": [
                {
                    "divisionName": "3rd",
                    "divisionTeams": [
                        {
                            "id": 7548,
                            "name": "MADE Fastbreakers 3rd",
                            "coach": "Dominic Lewis"
                        },
                        {
                            "id": 7549,
                            "name": "Madison 3rd",
                            "coach": "Elston Howard"
                        },
                        {
                            "id": 7546,
                            "name": "Playmakers Black 3rd",
                            "coach": "Tony Ortiz"
                        },
                        {
                            "id": 7547,
                            "name": "Playmakers Red 3rd",
                            "coach": "Mike Eager"
                        },
                        {
                            "id": 7555,
                            "name": "Team Rush 3rd",
                            "coach": "Brian Chisolm"
                        }
                    ]
                },
                {
                    "divisionName": "4th",
                    "divisionTeams": [
                        {
                            "id": 7605,
                            "name": "Baltimore United 4th",
                            "coach": "Kevin Thigpen"
                        },
                        {
                            "id": 7551,
                            "name": "Brooklyn Park Cyclones 4th",
                            "coach": "Glenn Nelson"
                        },
                        {
                            "id": 7553,
                            "name": "Madison 4th",
                            "coach": "Derrick Wilson"
                        },
                        {
                            "id": 7607,
                            "name": "Metro Celtics 4th",
                            "coach": "Steve Saunders"
                        },
                        {
                            "id": 7550,
                            "name": "Team Melo 4th",
                            "coach": "Kyle Duffie"
                        }
                    ]
                },
                {
                    "divisionName": "5th-6th",
                    "divisionTeams": [
                        {
                            "id": 7554,
                            "name": "1UP Warriors  5th",
                            "coach": "Kevin Thompson"
                        },
                        {
                            "id": 7559,
                            "name": "Columbia Ravens Black 6th",
                            "coach": "Michael Bender"
                        },
                        {
                            "id": 7552,
                            "name": "Columbia Ravens Purple 5th",
                            "coach": "Scott Conroy"
                        },
                        {
                            "id": 7556,
                            "name": "MD Finest 6th",
                            "coach": "Ted Ellis"
                        },
                        {
                            "id": 7557,
                            "name": "Md Playmakers 5th",
                            "coach": "Doug Clayton"
                        },
                        {
                            "id": 7558,
                            "name": "Randallstown Running Rebels 6th",
                            "coach": "Charles Wilson"
                        }
                    ]
                },
                {
                    "divisionName": "6th",
                    "divisionTeams": [
                        {
                            "id": 7563,
                            "name": "DC Playmakers 6th",
                            "coach": "Dr Louis Hutchinson"
                        },
                        {
                            "id": 7561,
                            "name": "MARYLAND BUCKS 6th",
                            "coach": "Antwain Thompson "
                        },
                        {
                            "id": 7562,
                            "name": "Maryland Playmakers 6th",
                            "coach": "Onzilo Pulliam"
                        },
                        {
                            "id": 7560,
                            "name": "MD Wolfpack 6th",
                            "coach": "Stephen Goldberg"
                        },
                        {
                            "id": 7564,
                            "name": "Team Rush 6th",
                            "coach": "Brian Chisolm"
                        }
                    ]
                },
                {
                    "divisionName": "7th Green",
                    "divisionTeams": [
                        {
                            "id": 7568,
                            "name": "Columbia Ravens Black 7th",
                            "coach": "Jordon Griffin"
                        },
                        {
                            "id": 7565,
                            "name": "Hammond MS 7th",
                            "coach": "Jamie Osterman"
                        },
                        {
                            "id": 7567,
                            "name": "HCYP Sharks BLUE 7th",
                            "coach": "Omari Franklin"
                        },
                        {
                            "id": 7566,
                            "name": "HCYP Sharks RED 7th",
                            "coach": "Omari Franklin"
                        },
                        {
                            "id": 7569,
                            "name": "Maryland Blazers 7th",
                            "coach": "Rusty Valentine"
                        }
                    ]
                },
                {
                    "divisionName": "7th White",
                    "divisionTeams": [
                        {
                            "id": 7574,
                            "name": "Columbia Ravens 7th Purple",
                            "coach": "John Miller"
                        },
                        {
                            "id": 7572,
                            "name": "DMV Swarm 7th",
                            "coach": "Kevin Domingue"
                        },
                        {
                            "id": 7576,
                            "name": "HC Elite Green 7th",
                            "coach": "James Stefan"
                        },
                        {
                            "id": 7575,
                            "name": "HC Elite White  7th",
                            "coach": "Eddie OMalley"
                        },
                        {
                            "id": 7570,
                            "name": "MARYLAND BUCKS 7th",
                            "coach": "Antwain Thompson "
                        },
                        {
                            "id": 7577,
                            "name": "MD Finest  7th",
                            "coach": "Sigmund Ceaser"
                        },
                        {
                            "id": 7571,
                            "name": "Metro Celtics 7th",
                            "coach": "J Malcolm Smith"
                        },
                        {
                            "id": 7573,
                            "name": "Team Melo 7th",
                            "coach": "Kyle Duffie"
                        }
                    ]
                },
                {
                    "divisionName": "8th Green",
                    "divisionTeams": [
                        {
                            "id": 7581,
                            "name": "HCYP Sharks  8th",
                            "coach": "Thomas Harrison"
                        },
                        {
                            "id": 7578,
                            "name": "Madison  8th",
                            "coach": "James Mitchell"
                        },
                        {
                            "id": 7582,
                            "name": "MARYLAND BUCKS  8th",
                            "coach": "Antwain Thompson "
                        },
                        {
                            "id": 7579,
                            "name": "MD Pride  8th",
                            "coach": "Jasper Francis"
                        },
                        {
                            "id": 7585,
                            "name": "Savage Shockers  8th",
                            "coach": "Earl Mitchell"
                        },
                        {
                            "id": 7580,
                            "name": "Warriors 8th",
                            "coach": "Dennis Schwanke"
                        }
                    ]
                },
                {
                    "divisionName": "8th White",
                    "divisionTeams": [
                        {
                            "id": 7588,
                            "name": "Balt United South White 8th",
                            "coach": "Brian Bieman"
                        },
                        {
                            "id": 7584,
                            "name": "DMV Swarm 8th",
                            "coach": "Domingue"
                        },
                        {
                            "id": 7586,
                            "name": "HC Elite White  8th",
                            "coach": "Fred Teodosio"
                        },
                        {
                            "id": 7583,
                            "name": "Metro Celtics 8th",
                            "coach": "DeShaun Kelly"
                        },
                        {
                            "id": 7587,
                            "name": "Millersville Hornets 8th",
                            "coach": "Patrick Smith"
                        }
                    ]
                },
                {
                    "divisionName": "9th",
                    "divisionTeams": [
                        {
                            "id": 7591,
                            "name": "Anne Arundel Ballhawks 9th",
                            "coach": "Brad Cantrell"
                        },
                        {
                            "id": 7590,
                            "name": "Balt United South Red  9th",
                            "coach": "Brian Bieman"
                        },
                        {
                            "id": 7593,
                            "name": "Columbia Ravens - Held 9h",
                            "coach": "Rich Held"
                        },
                        {
                            "id": 7589,
                            "name": "HC Elite Green  9th",
                            "coach": "Fred Teodosio"
                        },
                        {
                            "id": 7592,
                            "name": "Hoopmasters  BC 9th",
                            "coach": "Brandon Costley"
                        }
                    ]
                },
                {
                    "divisionName": "HS Green",
                    "divisionTeams": [
                        {
                            "id": 7598,
                            "name": "Carroll Basketball 10th",
                            "coach": "Fred Selby"
                        },
                        {
                            "id": 7594,
                            "name": "DMV Running Rebels Boys 10th",
                            "coach": "Thomas Swindell"
                        },
                        {
                            "id": 7596,
                            "name": "Franklin Force - Gembe 10th",
                            "coach": "Garon Gembe"
                        },
                        {
                            "id": 7606,
                            "name": "Lions - 10th",
                            "coach": "Lions Coach"
                        },
                        {
                            "id": 7595,
                            "name": "MD Warriors 10th",
                            "coach": "Tim Martin"
                        },
                        {
                            "id": 7597,
                            "name": "Team Dedicaion 10th",
                            "coach": "Dennis Kirkland"
                        }
                    ]
                },
                {
                    "divisionName": "HS White",
                    "divisionTeams": [
                        {
                            "id": 7600,
                            "name": "Franklin Force - 11th",
                            "coach": "Thomas Hoffman"
                        },
                        {
                            "id": 7602,
                            "name": "HC Elite  11th",
                            "coach": "Chris Tringali"
                        },
                        {
                            "id": 7601,
                            "name": "Hoopmasters  Cole 11th",
                            "coach": "Scott Cole"
                        },
                        {
                            "id": 7603,
                            "name": "Southern Tier  11th",
                            "coach": "Tony Lindsey"
                        },
                        {
                            "id": 7599,
                            "name": "Team Sizzle (16U)",
                            "coach": "Troy Burroughs"
                        }
                    ]
                }
            ],
            "locations": [
                {
                    "id": 3,
                    "name": "Meadowbrook Ct. 1",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "address": "5001 Meadowbrook Lane, Ellicott City, MD",
                    "latitude": 39.24,
                    "longitude": -76.82
                },
                {
                    "id": 4,
                    "name": "Meadowbrook Ct. 2",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "address": "5001 Meadowbrook Lane, Ellicott City, MD",
                    "latitude": 39.24,
                    "longitude": -76.82
                },
                {
                    "id": 5,
                    "name": "Meadowbrook Ct. 3",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "address": "5001 Meadowbrook Lane, Ellicott City, MD",
                    "latitude": 39.24,
                    "longitude": -76.82
                },
                {
                    "id": 6,
                    "name": "Meadowbrook Ct. 4",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "address": "5001 Meadowbrook Lane, Ellicott City, MD",
                    "latitude": 39.24,
                    "longitude": -76.82
                },
                {
                    "id": 1003,
                    "name": "North Laurel Comm. Center Ct. 5",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "address": "9411 Whiskey Bottom Road Laurel, MD 20723",
                    "latitude": 39.11,
                    "longitude": -76.83
                },
                {
                    "id": 1011,
                    "name": "North Laurel Comm. Center Ct. 6",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "address": "9411 Whiskey Bottom Road Laurel, MD 20723",
                    "latitude": 39.11,
                    "longitude": -76.83
                }
            ],
            "games": [
                {
                    "id": 14965,
                    "location": "Meadowbrook Ct. 3",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 5,
                    "team1": "HC Elite Green  9th",
                    "team1Id": 7589,
                    "team2": "Columbia Ravens - Held 9h",
                    "team2Id": 7593,
                    "team1Score": "40",
                    "team2Score": "49",
                    "time": "2016-03-18T18:30:00"
                },
                {
                    "id": 14962,
                    "location": "Meadowbrook Ct. 2",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 4,
                    "team1": "Columbia Ravens Black 7th",
                    "team1Id": 7568,
                    "team2": "Hammond MS 7th",
                    "team2Id": 7565,
                    "team1Score": "38",
                    "team2Score": "30",
                    "time": "2016-03-18T18:30:00"
                },
                {
                    "id": 14963,
                    "location": "Meadowbrook Ct. 1",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 3,
                    "team1": "HC Elite White  7th",
                    "team1Id": 7575,
                    "team2": "HC Elite Green 7th",
                    "team2Id": 7576,
                    "team1Score": "50",
                    "team2Score": "47",
                    "time": "2016-03-18T18:30:00"
                },
                {
                    "id": 14964,
                    "location": "Meadowbrook Ct. 3",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 5,
                    "team1": "HC Elite White  8th",
                    "team1Id": 7586,
                    "team2": "Millersville Hornets 8th",
                    "team2Id": 7587,
                    "team1Score": "50",
                    "team2Score": "47",
                    "time": "2016-03-18T19:30:00"
                },
                {
                    "id": 14966,
                    "location": "Meadowbrook Ct. 1",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 3,
                    "team1": "HCYP Sharks  8th",
                    "team1Id": 7581,
                    "team2": "Madison  8th",
                    "team2Id": 7578,
                    "team1Score": "26",
                    "team2Score": "61",
                    "time": "2016-03-18T19:30:00"
                },
                {
                    "id": 14967,
                    "location": "Meadowbrook Ct. 2",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 4,
                    "team1": "Carroll Basketball 10th",
                    "team1Id": 7598,
                    "team2": "MD Warriors 10th",
                    "team2Id": 7595,
                    "team1Score": "53",
                    "team2Score": "13",
                    "time": "2016-03-18T19:30:00"
                },
                {
                    "id": 14968,
                    "location": "North Laurel Comm. Center Ct. 5",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1003,
                    "team1": "MD Wolfpack 6th",
                    "team1Id": 7560,
                    "team2": "DC Playmakers 6th",
                    "team2Id": 7563,
                    "team1Score": "41",
                    "team2Score": "49",
                    "time": "2016-03-19T09:00:00"
                },
                {
                    "id": 14979,
                    "location": "North Laurel Comm. Center Ct. 6",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1011,
                    "team1": "MARYLAND BUCKS 6th",
                    "team1Id": 7561,
                    "team2": "Team Rush 6th",
                    "team2Id": 7564,
                    "team1Score": "39",
                    "team2Score": "40",
                    "time": "2016-03-19T09:00:00"
                },
                {
                    "id": 15013,
                    "location": "Meadowbrook Ct. 1",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 3,
                    "team1": "Savage Shockers  8th",
                    "team1Id": 7585,
                    "team2": "HCYP Sharks  8th",
                    "team2Id": 7581,
                    "team1Score": "30",
                    "team2Score": "36",
                    "time": "2016-03-19T09:00:00"
                },
                {
                    "id": 15024,
                    "location": "Meadowbrook Ct. 2",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 4,
                    "team1": "Team Dedicaion 10th",
                    "team1Id": 7597,
                    "team2": "MD Warriors 10th",
                    "team2Id": 7595,
                    "team1Score": "83",
                    "team2Score": "12",
                    "time": "2016-03-19T09:00:00"
                },
                {
                    "id": 15034,
                    "location": "Meadowbrook Ct. 3",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 5,
                    "team1": "Columbia Ravens - Held 9h",
                    "team1Id": 7593,
                    "team2": "Hoopmasters  BC 9th",
                    "team2Id": 7592,
                    "team1Score": "45",
                    "team2Score": "39",
                    "time": "2016-03-19T09:00:00"
                },
                {
                    "id": 15043,
                    "location": "Meadowbrook Ct. 4",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 6,
                    "team1": "Balt United South White 8th",
                    "team1Id": 7588,
                    "team2": "Metro Celtics 8th",
                    "team2Id": 7583,
                    "team1Score": "37",
                    "team2Score": "30",
                    "time": "2016-03-19T09:00:00"
                },
                {
                    "id": 15035,
                    "location": "Meadowbrook Ct. 3",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 5,
                    "team1": "Balt United South Red  9th",
                    "team1Id": 7590,
                    "team2": "Anne Arundel Ballhawks 9th",
                    "team2Id": 7591,
                    "team1Score": "40",
                    "team2Score": "53",
                    "time": "2016-03-19T10:00:00"
                },
                {
                    "id": 15025,
                    "location": "Meadowbrook Ct. 2",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 4,
                    "team1": "HC Elite  11th",
                    "team1Id": 7602,
                    "team2": "Southern Tier  11th",
                    "team2Id": 7603,
                    "team1Score": "44",
                    "team2Score": "40",
                    "time": "2016-03-19T10:00:00"
                },
                {
                    "id": 15014,
                    "location": "Meadowbrook Ct. 1",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 3,
                    "team1": "DMV Swarm 8th",
                    "team1Id": 7584,
                    "team2": "Millersville Hornets 8th",
                    "team2Id": 7587,
                    "team1Score": "52",
                    "team2Score": "60",
                    "time": "2016-03-19T10:00:00"
                },
                {
                    "id": 14981,
                    "location": "North Laurel Comm. Center Ct. 6",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1011,
                    "team1": "Playmakers Black 3rd",
                    "team1Id": 7546,
                    "team2": "Playmakers Red 3rd",
                    "team2Id": 7547,
                    "team1Score": "22",
                    "team2Score": "33",
                    "time": "2016-03-19T10:00:00"
                },
                {
                    "id": 14969,
                    "location": "North Laurel Comm. Center Ct. 5",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1003,
                    "team1": "Maryland Blazers 7th",
                    "team1Id": 7569,
                    "team2": "Hammond MS 7th",
                    "team2Id": 7565,
                    "team1Score": "36",
                    "team2Score": "22",
                    "time": "2016-03-19T10:00:00"
                },
                {
                    "id": 14988,
                    "location": "Meadowbrook Ct. 4",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 6,
                    "team1": "Columbia Ravens Purple 5th",
                    "team1Id": 7552,
                    "team2": "Md Playmakers 5th",
                    "team2Id": 7557,
                    "team1Score": "45",
                    "team2Score": "34",
                    "time": "2016-03-19T10:00:00"
                },
                {
                    "id": 14970,
                    "location": "North Laurel Comm. Center Ct. 5",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1003,
                    "team1": "MARYLAND BUCKS 6th",
                    "team1Id": 7561,
                    "team2": "MD Wolfpack 6th",
                    "team2Id": 7560,
                    "team1Score": "33",
                    "team2Score": "38",
                    "time": "2016-03-19T11:00:00"
                },
                {
                    "id": 14980,
                    "location": "North Laurel Comm. Center Ct. 6",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1011,
                    "team1": "Team Rush 6th",
                    "team1Id": 7564,
                    "team2": "DC Playmakers 6th",
                    "team2Id": 7563,
                    "team1Score": "21",
                    "team2Score": "38",
                    "time": "2016-03-19T11:00:00"
                },
                {
                    "id": 15015,
                    "location": "Meadowbrook Ct. 1",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 3,
                    "team1": "DMV Swarm 7th",
                    "team1Id": 7572,
                    "team2": "Columbia Ravens 7th Purple",
                    "team2Id": 7574,
                    "team1Score": "38",
                    "team2Score": "56",
                    "time": "2016-03-19T11:00:00"
                },
                {
                    "id": 15026,
                    "location": "Meadowbrook Ct. 2",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 4,
                    "team1": "HC Elite Green  9th",
                    "team1Id": 7589,
                    "team2": "Hoopmasters  BC 9th",
                    "team2Id": 7592,
                    "team1Score": "43",
                    "team2Score": "37",
                    "time": "2016-03-19T11:00:00"
                },
                {
                    "id": 15036,
                    "location": "Meadowbrook Ct. 3",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 5,
                    "team1": "Savage Shockers  8th",
                    "team1Id": 7585,
                    "team2": "MD Pride  8th",
                    "team2Id": 7579,
                    "team1Score": "31",
                    "team2Score": "36",
                    "time": "2016-03-19T11:00:00"
                },
                {
                    "id": 15044,
                    "location": "Meadowbrook Ct. 4",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 6,
                    "team1": "Team Dedicaion 10th",
                    "team1Id": 7597,
                    "team2": "Franklin Force - Gembe 10th",
                    "team2Id": 7596,
                    "team1Score": "42",
                    "team2Score": "55",
                    "time": "2016-03-19T11:00:00"
                },
                {
                    "id": 15037,
                    "location": "Meadowbrook Ct. 3",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 5,
                    "team1": "HC Elite White  8th",
                    "team1Id": 7586,
                    "team2": "Metro Celtics 8th",
                    "team2Id": 7583,
                    "team1Score": "53",
                    "team2Score": "21",
                    "time": "2016-03-19T12:00:00"
                },
                {
                    "id": 15027,
                    "location": "Meadowbrook Ct. 2",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 4,
                    "team1": "MARYLAND BUCKS  8th",
                    "team1Id": 7582,
                    "team2": "Warriors 8th",
                    "team2Id": 7580,
                    "team1Score": "73",
                    "team2Score": "21",
                    "time": "2016-03-19T12:00:00"
                },
                {
                    "id": 15016,
                    "location": "Meadowbrook Ct. 1",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 3,
                    "team1": "DMV Swarm 8th",
                    "team1Id": 7584,
                    "team2": "Balt United South White 8th",
                    "team2Id": 7588,
                    "team1Score": "54",
                    "team2Score": "36",
                    "time": "2016-03-19T12:00:00"
                },
                {
                    "id": 14982,
                    "location": "North Laurel Comm. Center Ct. 6",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1011,
                    "team1": "MADE Fastbreakers 3rd",
                    "team1Id": 7548,
                    "team2": "Playmakers Black 3rd",
                    "team2Id": 7546,
                    "team1Score": "17",
                    "team2Score": "48",
                    "time": "2016-03-19T12:00:00"
                },
                {
                    "id": 14971,
                    "location": "North Laurel Comm. Center Ct. 5",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1003,
                    "team1": "HCYP Sharks BLUE 7th",
                    "team1Id": 7567,
                    "team2": "Maryland Blazers 7th",
                    "team2Id": 7569,
                    "team1Score": "26",
                    "team2Score": "49",
                    "time": "2016-03-19T12:00:00"
                },
                {
                    "id": 15004,
                    "location": "Meadowbrook Ct. 4",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 6,
                    "team1": "MD Finest 6th",
                    "team1Id": 7556,
                    "team2": "Md Playmakers 5th",
                    "team2Id": 7557,
                    "team1Score": "80",
                    "team2Score": "23",
                    "time": "2016-03-19T12:00:00"
                },
                {
                    "id": 15005,
                    "location": "Meadowbrook Ct. 4",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 6,
                    "team1": "DMV Running Rebels Boys 10th",
                    "team1Id": 7594,
                    "team2": "Franklin Force - Gembe 10th",
                    "team2Id": 7596,
                    "team1Score": "32",
                    "team2Score": "44",
                    "time": "2016-03-19T13:15:00"
                },
                {
                    "id": 14972,
                    "location": "North Laurel Comm. Center Ct. 5",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1003,
                    "team1": "DC Playmakers 6th",
                    "team1Id": 7563,
                    "team2": "Maryland Playmakers 6th",
                    "team2Id": 7562,
                    "team1Score": "38",
                    "team2Score": "53",
                    "time": "2016-03-19T13:15:00"
                },
                {
                    "id": 15028,
                    "location": "Meadowbrook Ct. 2",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 4,
                    "team1": "Team Melo 7th",
                    "team1Id": 7573,
                    "team2": "DMV Swarm 7th",
                    "team2Id": 7572,
                    "team1Score": "51",
                    "team2Score": "44",
                    "time": "2016-03-19T13:15:00"
                },
                {
                    "id": 15038,
                    "location": "Meadowbrook Ct. 3",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 5,
                    "team1": "Balt United South Red  9th",
                    "team1Id": 7590,
                    "team2": "Hoopmasters  BC 9th",
                    "team2Id": 7592,
                    "team1Score": "56",
                    "team2Score": "42",
                    "time": "2016-03-19T13:15:00"
                },
                {
                    "id": 15083,
                    "location": "North Laurel Comm. Center Ct. 6",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1011,
                    "team1": "Metro Celtics 4th",
                    "team1Id": 7607,
                    "team2": "Baltimore United 4th",
                    "team2Id": 7605,
                    "team1Score": "31",
                    "team2Score": "29",
                    "time": "2016-03-19T13:15:00"
                },
                {
                    "id": 15087,
                    "location": "North Laurel Comm. Center Ct. 5",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1003,
                    "team1": "Madison 3rd",
                    "team1Id": 7549,
                    "team2": "Playmakers Red 3rd",
                    "team2Id": 7547,
                    "team1Score": "1",
                    "team2Score": "16",
                    "time": "2016-03-19T13:15:00"
                },
                {
                    "id": 15039,
                    "location": "Meadowbrook Ct. 3",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 5,
                    "team1": "Southern Tier  11th",
                    "team1Id": 7603,
                    "team2": "Hoopmasters  Cole 11th",
                    "team2Id": 7601,
                    "team1Score": "43",
                    "team2Score": "46",
                    "time": "2016-03-19T14:15:00"
                },
                {
                    "id": 15029,
                    "location": "Meadowbrook Ct. 2",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 4,
                    "team1": "MARYLAND BUCKS  8th",
                    "team1Id": 7582,
                    "team2": "Madison  8th",
                    "team2Id": 7578,
                    "team1Score": "32",
                    "team2Score": "62",
                    "time": "2016-03-19T14:15:00"
                },
                {
                    "id": 15018,
                    "location": "Meadowbrook Ct. 1",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 3,
                    "team1": "HC Elite Green  9th",
                    "team1Id": 7589,
                    "team2": "Anne Arundel Ballhawks 9th",
                    "team2Id": 7591,
                    "team1Score": "46",
                    "team2Score": "54",
                    "time": "2016-03-19T14:15:00"
                },
                {
                    "id": 14973,
                    "location": "North Laurel Comm. Center Ct. 5",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1003,
                    "team1": "Hammond MS 7th",
                    "team1Id": 7565,
                    "team2": "HCYP Sharks RED 7th",
                    "team2Id": 7566,
                    "team1Score": "32",
                    "team2Score": "46",
                    "time": "2016-03-19T14:15:00"
                },
                {
                    "id": 14984,
                    "location": "North Laurel Comm. Center Ct. 6",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1011,
                    "team1": "Team Rush 3rd",
                    "team1Id": 7555,
                    "team2": "Playmakers Black 3rd",
                    "team2Id": 7546,
                    "team1Score": "29",
                    "team2Score": "31",
                    "time": "2016-03-19T14:15:00"
                },
                {
                    "id": 15006,
                    "location": "Meadowbrook Ct. 4",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 6,
                    "team1": "MD Finest 6th",
                    "team1Id": 7556,
                    "team2": "Randallstown Running Rebels 6th",
                    "team2Id": 7558,
                    "team1Score": "27",
                    "team2Score": "29",
                    "time": "2016-03-19T14:15:00"
                },
                {
                    "id": 15007,
                    "location": "Meadowbrook Ct. 4",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 6,
                    "team1": "Columbia Ravens Purple 5th",
                    "team1Id": 7552,
                    "team2": "1UP Warriors  5th",
                    "team2Id": 7554,
                    "team1Score": "29",
                    "team2Score": "35",
                    "time": "2016-03-19T15:15:00"
                },
                {
                    "id": 14985,
                    "location": "North Laurel Comm. Center Ct. 6",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1011,
                    "team1": "MADE Fastbreakers 3rd",
                    "team1Id": 7548,
                    "team2": "Playmakers Red 3rd",
                    "team2Id": 7547,
                    "team1Score": "19",
                    "team2Score": "35",
                    "time": "2016-03-19T15:15:00"
                },
                {
                    "id": 14974,
                    "location": "North Laurel Comm. Center Ct. 5",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1003,
                    "team1": "Maryland Playmakers 6th",
                    "team1Id": 7562,
                    "team2": "MARYLAND BUCKS 6th",
                    "team2Id": 7561,
                    "team1Score": "51",
                    "team2Score": "50",
                    "time": "2016-03-19T15:15:00"
                },
                {
                    "id": 15019,
                    "location": "Meadowbrook Ct. 1",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 3,
                    "team1": "HC Elite White  7th",
                    "team1Id": 7575,
                    "team2": "Columbia Ravens 7th Purple",
                    "team2Id": 7574,
                    "team1Score": "43",
                    "team2Score": "35",
                    "time": "2016-03-19T15:15:00"
                },
                {
                    "id": 15030,
                    "location": "Meadowbrook Ct. 2",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 4,
                    "team1": "Team Melo 7th",
                    "team1Id": 7573,
                    "team2": "MARYLAND BUCKS 7th",
                    "team2Id": 7570,
                    "team1Score": "39",
                    "team2Score": "23",
                    "time": "2016-03-19T15:15:00"
                },
                {
                    "id": 15040,
                    "location": "Meadowbrook Ct. 3",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 5,
                    "team1": "Balt United South Red  9th",
                    "team1Id": 7590,
                    "team2": "Columbia Ravens - Held 9h",
                    "team2Id": 7593,
                    "team1Score": "48",
                    "team2Score": "46",
                    "time": "2016-03-19T15:15:00"
                },
                {
                    "id": 15041,
                    "location": "Meadowbrook Ct. 3",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 5,
                    "team1": "DMV Running Rebels Boys 10th",
                    "team1Id": 7594,
                    "team2": "MD Warriors 10th",
                    "team2Id": 7595,
                    "team1Score": "55",
                    "team2Score": "15",
                    "time": "2016-03-19T16:15:00"
                },
                {
                    "id": 15020,
                    "location": "Meadowbrook Ct. 1",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 3,
                    "team1": "HC Elite Green 7th",
                    "team1Id": 7576,
                    "team2": "MD Finest  7th",
                    "team2Id": 7577,
                    "team1Score": "44",
                    "team2Score": "57",
                    "time": "2016-03-19T16:15:00"
                },
                {
                    "id": 14975,
                    "location": "North Laurel Comm. Center Ct. 5",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1003,
                    "team1": "Columbia Ravens Black 7th",
                    "team1Id": 7568,
                    "team2": "HCYP Sharks BLUE 7th",
                    "team2Id": 7567,
                    "team1Score": "36",
                    "team2Score": "21",
                    "time": "2016-03-19T16:15:00"
                },
                {
                    "id": 14986,
                    "location": "North Laurel Comm. Center Ct. 6",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1011,
                    "team1": "Madison 3rd",
                    "team1Id": 7549,
                    "team2": "Team Rush 3rd",
                    "team2Id": 7555,
                    "team1Score": "20",
                    "team2Score": "24",
                    "time": "2016-03-19T16:15:00"
                },
                {
                    "id": 15008,
                    "location": "Meadowbrook Ct. 4",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 6,
                    "team1": "MD Pride  8th",
                    "team1Id": 7579,
                    "team2": "Warriors 8th",
                    "team2Id": 7580,
                    "team1Score": "66",
                    "team2Score": "31",
                    "time": "2016-03-19T16:15:00"
                },
                {
                    "id": 14976,
                    "location": "North Laurel Comm. Center Ct. 5",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1003,
                    "team1": "Brooklyn Park Cyclones 4th",
                    "team1Id": 7551,
                    "team2": "Team Melo 4th",
                    "team2Id": 7550,
                    "team1Score": "21",
                    "team2Score": "48",
                    "time": "2016-03-19T17:15:00"
                },
                {
                    "id": 15009,
                    "location": "Meadowbrook Ct. 4",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 6,
                    "team1": "Columbia Ravens Black 6th",
                    "team1Id": 7559,
                    "team2": "1UP Warriors  5th",
                    "team2Id": 7554,
                    "team1Score": "43",
                    "team2Score": "22",
                    "time": "2016-03-19T17:30:00"
                },
                {
                    "id": 15021,
                    "location": "Meadowbrook Ct. 1",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 3,
                    "team1": "HC Elite White  7th",
                    "team1Id": 7575,
                    "team2": "Metro Celtics 7th",
                    "team2Id": 7571,
                    "team1Score": "49",
                    "team2Score": "29",
                    "time": "2016-03-19T17:30:00"
                },
                {
                    "id": 15078,
                    "location": "Meadowbrook Ct. 3",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 5,
                    "team1": "HC Elite  11th",
                    "team1Id": 7602,
                    "team2": "Hoopmasters  Cole 11th",
                    "team2Id": 7601,
                    "team1Score": "49",
                    "team2Score": "41",
                    "time": "2016-03-19T17:30:00"
                },
                {
                    "id": 15032,
                    "location": "Meadowbrook Ct. 2",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 4,
                    "team1": "Team Sizzle (16U)",
                    "team1Id": 7599,
                    "team2": "Franklin Force - 11th",
                    "team2Id": 7600,
                    "team1Score": "55",
                    "team2Score": "38",
                    "time": "2016-03-19T17:30:00"
                },
                {
                    "id": 15003,
                    "location": "North Laurel Comm. Center Ct. 6",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1011,
                    "team1": "Baltimore United 4th",
                    "team1Id": 7605,
                    "team2": "Madison 4th",
                    "team2Id": 7553,
                    "team1Score": "10",
                    "team2Score": "27",
                    "time": "2016-03-19T17:30:00"
                },
                {
                    "id": 14977,
                    "location": "North Laurel Comm. Center Ct. 5",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1003,
                    "team1": "HCYP Sharks RED 7th",
                    "team1Id": 7566,
                    "team2": "Columbia Ravens Black 7th",
                    "team2Id": 7568,
                    "team1Score": "38",
                    "team2Score": "36",
                    "time": "2016-03-19T18:15:00"
                },
                {
                    "id": 15010,
                    "location": "Meadowbrook Ct. 4",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 6,
                    "team1": "Madison  8th",
                    "team1Id": 7578,
                    "team2": "Warriors 8th",
                    "team2Id": 7580,
                    "team1Score": "101",
                    "team2Score": "33",
                    "time": "2016-03-19T18:30:00"
                },
                {
                    "id": 15022,
                    "location": "Meadowbrook Ct. 1",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 3,
                    "team1": "HC Elite Green 7th",
                    "team1Id": 7576,
                    "team2": "MARYLAND BUCKS 7th",
                    "team2Id": 7570,
                    "team1Score": "43",
                    "team2Score": "37",
                    "time": "2016-03-19T18:30:00"
                },
                {
                    "id": 15031,
                    "location": "Meadowbrook Ct. 2",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 4,
                    "team1": "Carroll Basketball 10th",
                    "team1Id": 7598,
                    "team2": "DMV Running Rebels Boys 10th",
                    "team2Id": 7594,
                    "team1Score": "57",
                    "team2Score": "53",
                    "time": "2016-03-19T18:30:00"
                },
                {
                    "id": 15079,
                    "location": "Meadowbrook Ct. 3",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 5,
                    "team1": "Columbia Ravens Purple 5th",
                    "team1Id": 7552,
                    "team2": "MD Finest 6th",
                    "team2Id": 7556,
                    "team1Score": "26",
                    "team2Score": "38",
                    "time": "2016-03-19T18:30:00"
                },
                {
                    "id": 14993,
                    "location": "North Laurel Comm. Center Ct. 6",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1011,
                    "team1": "Team Rush 3rd",
                    "team1Id": 7555,
                    "team2": "MADE Fastbreakers 3rd",
                    "team2Id": 7548,
                    "team1Score": "49",
                    "team2Score": "26",
                    "time": "2016-03-19T18:30:00"
                },
                {
                    "id": 14978,
                    "location": "North Laurel Comm. Center Ct. 5",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1003,
                    "team1": "Team Melo 4th",
                    "team1Id": 7550,
                    "team2": "Madison 4th",
                    "team2Id": 7553,
                    "team1Score": "22",
                    "team2Score": "29",
                    "time": "2016-03-19T19:15:00"
                },
                {
                    "id": 15011,
                    "location": "Meadowbrook Ct. 4",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 6,
                    "team1": "Columbia Ravens Black 6th",
                    "team1Id": 7559,
                    "team2": "Randallstown Running Rebels 6th",
                    "team2Id": 7558,
                    "team1Score": "13",
                    "team2Score": "40",
                    "time": "2016-03-19T19:30:00"
                },
                {
                    "id": 15023,
                    "location": "Meadowbrook Ct. 1",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 3,
                    "team1": "MD Finest  7th",
                    "team1Id": 7577,
                    "team2": "Metro Celtics 7th",
                    "team2Id": 7571,
                    "team1Score": "35",
                    "team2Score": "16",
                    "time": "2016-03-19T19:30:00"
                },
                {
                    "id": 15042,
                    "location": "Meadowbrook Ct. 3",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 5,
                    "team1": "Team Sizzle (16U)",
                    "team1Id": 7599,
                    "team2": "Hoopmasters  Cole 11th",
                    "team2Id": 7601,
                    "team1Score": "76",
                    "team2Score": "54",
                    "time": "2016-03-19T19:30:00"
                },
                {
                    "id": 15077,
                    "location": "North Laurel Comm. Center Ct. 6",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1011,
                    "team1": "Brooklyn Park Cyclones 4th",
                    "team1Id": 7551,
                    "team2": "Baltimore United 4th",
                    "team2Id": 7605,
                    "team1Score": "13",
                    "team2Score": "31",
                    "time": "2016-03-19T19:30:00"
                },
                {
                    "id": 15033,
                    "location": "Meadowbrook Ct. 2",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 4,
                    "team1": "Franklin Force - 11th",
                    "team1Id": 7600,
                    "team2": "HC Elite  11th",
                    "team2Id": 7602,
                    "team1Score": "62",
                    "team2Score": "54",
                    "time": "2016-03-19T19:30:00"
                },
                {
                    "id": 15084,
                    "location": "North Laurel Comm. Center Ct. 5",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1003,
                    "team1": "Madison 4th",
                    "team1Id": 7553,
                    "team2": "Metro Celtics 4th",
                    "team2Id": 7607,
                    "team1Score": "36",
                    "team2Score": "29",
                    "time": "2016-03-19T20:15:00"
                },
                {
                    "id": 15012,
                    "location": "Meadowbrook Ct. 4",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 6,
                    "team1": "Warriors 8th",
                    "team1Id": 7580,
                    "team2": "HCYP Sharks  8th",
                    "team2Id": 7581,
                    "team1Score": "23",
                    "team2Score": "49",
                    "time": "2016-03-19T20:30:00"
                },
                {
                    "id": 15045,
                    "location": "Meadowbrook Ct. 1",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 3,
                    "team1": "Team Dedicaion 10th",
                    "team1Id": 7597,
                    "team2": "Carroll Basketball 10th",
                    "team2Id": 7598,
                    "team1Score": "47",
                    "team2Score": "39",
                    "time": "2016-03-20T08:00:00"
                },
                {
                    "id": 15069,
                    "location": "Meadowbrook Ct. 4",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 6,
                    "team1": "Anne Arundel Ballhawks 9th",
                    "team1Id": 7591,
                    "team2": "Columbia Ravens - Held 9h",
                    "team2Id": 7593,
                    "team1Score": "67",
                    "team2Score": "45",
                    "time": "2016-03-20T08:00:00"
                },
                {
                    "id": 15054,
                    "location": "Meadowbrook Ct. 2",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 4,
                    "team1": "Metro Celtics 8th",
                    "team1Id": 7583,
                    "team2": "Millersville Hornets 8th",
                    "team2Id": 7587,
                    "team1Score": "39",
                    "team2Score": "42",
                    "time": "2016-03-20T09:00:00"
                },
                {
                    "id": 15061,
                    "location": "Meadowbrook Ct. 3",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 5,
                    "team1": "Columbia Ravens 7th Purple",
                    "team1Id": 7574,
                    "team2": "MARYLAND BUCKS 7th",
                    "team2Id": 7570,
                    "team1Score": "43",
                    "team2Score": "18",
                    "time": "2016-03-20T09:00:00"
                },
                {
                    "id": 15086,
                    "location": "Meadowbrook Ct. 4",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 6,
                    "team1": "Brooklyn Park Cyclones 4th",
                    "team1Id": 7551,
                    "team2": "Metro Celtics 4th",
                    "team2Id": 7607,
                    "team1Score": "20",
                    "team2Score": "38",
                    "time": "2016-03-20T09:00:00"
                },
                {
                    "id": 15046,
                    "location": "Meadowbrook Ct. 1",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 3,
                    "team1": "HC Elite White  7th",
                    "team1Id": 7575,
                    "team2": "Team Melo 7th",
                    "team2Id": 7573,
                    "team1Score": "45",
                    "team2Score": "36",
                    "time": "2016-03-20T09:00:00"
                },
                {
                    "id": 14989,
                    "location": "North Laurel Comm. Center Ct. 5",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1003,
                    "team1": "Playmakers Black 3rd",
                    "team1Id": 7546,
                    "team2": "Madison 3rd",
                    "team2Id": 7549,
                    "team1Score": "39",
                    "team2Score": "30",
                    "time": "2016-03-20T09:00:00"
                },
                {
                    "id": 14996,
                    "location": "North Laurel Comm. Center Ct. 6",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1011,
                    "team1": "MD Wolfpack 6th",
                    "team1Id": 7560,
                    "team2": "Team Rush 6th",
                    "team2Id": 7564,
                    "team1Score": "56",
                    "team2Score": "31",
                    "time": "2016-03-20T09:00:00"
                },
                {
                    "id": 14997,
                    "location": "North Laurel Comm. Center Ct. 6",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1011,
                    "team1": "Playmakers Red 3rd",
                    "team1Id": 7547,
                    "team2": "Team Rush 3rd",
                    "team2Id": 7555,
                    "team1Score": "41",
                    "team2Score": "34",
                    "time": "2016-03-20T10:00:00"
                },
                {
                    "id": 14990,
                    "location": "North Laurel Comm. Center Ct. 5",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1003,
                    "team1": "HCYP Sharks RED 7th",
                    "team1Id": 7566,
                    "team2": "HCYP Sharks BLUE 7th",
                    "team2Id": 7567,
                    "team1Score": "35",
                    "team2Score": "20",
                    "time": "2016-03-20T10:00:00"
                },
                {
                    "id": 15047,
                    "location": "Meadowbrook Ct. 1",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 3,
                    "team1": "Team Dedicaion 10th",
                    "team1Id": 7597,
                    "team2": "DMV Running Rebels Boys 10th",
                    "team2Id": 7594,
                    "team1Score": "52",
                    "team2Score": "48",
                    "time": "2016-03-20T10:00:00"
                },
                {
                    "id": 15062,
                    "location": "Meadowbrook Ct. 3",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 5,
                    "team1": "HC Elite Green 7th",
                    "team1Id": 7576,
                    "team2": "DMV Swarm 7th",
                    "team2Id": 7572,
                    "team1Score": "61",
                    "team2Score": "59",
                    "time": "2016-03-20T10:00:00"
                },
                {
                    "id": 15055,
                    "location": "Meadowbrook Ct. 2",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 4,
                    "team1": "HC Elite White  8th",
                    "team1Id": 7586,
                    "team2": "Balt United South White 8th",
                    "team2Id": 7588,
                    "team1Score": "46",
                    "team2Score": "24",
                    "time": "2016-03-20T10:00:00"
                },
                {
                    "id": 15070,
                    "location": "Meadowbrook Ct. 4",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 6,
                    "team1": "MARYLAND BUCKS  8th",
                    "team1Id": 7582,
                    "team2": "Savage Shockers  8th",
                    "team2Id": 7585,
                    "team1Score": "54",
                    "team2Score": "37",
                    "time": "2016-03-20T10:00:00"
                },
                {
                    "id": 15071,
                    "location": "Meadowbrook Ct. 4",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 6,
                    "team1": "Anne Arundel Ballhawks 9th",
                    "team1Id": 7591,
                    "team2": "Hoopmasters  BC 9th",
                    "team2Id": 7592,
                    "team1Score": "59",
                    "team2Score": "40",
                    "time": "2016-03-20T11:00:00"
                },
                {
                    "id": 15056,
                    "location": "Meadowbrook Ct. 2",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 4,
                    "team1": "Metro Celtics 8th",
                    "team1Id": 7583,
                    "team2": "DMV Swarm 8th",
                    "team2Id": 7584,
                    "team1Score": "58",
                    "team2Score": "55",
                    "time": "2016-03-20T11:00:00"
                },
                {
                    "id": 15063,
                    "location": "Meadowbrook Ct. 3",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 5,
                    "team1": "Metro Celtics 7th",
                    "team1Id": 7571,
                    "team2": "MARYLAND BUCKS 7th",
                    "team2Id": 7570,
                    "team1Score": "37",
                    "team2Score": "30",
                    "time": "2016-03-20T11:00:00"
                },
                {
                    "id": 15048,
                    "location": "Meadowbrook Ct. 1",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 3,
                    "team1": "Franklin Force - Gembe 10th",
                    "team1Id": 7596,
                    "team2": "Carroll Basketball 10th",
                    "team2Id": 7598,
                    "team1Score": "51",
                    "team2Score": "54",
                    "time": "2016-03-20T11:00:00"
                },
                {
                    "id": 14991,
                    "location": "North Laurel Comm. Center Ct. 5",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1003,
                    "team1": "MADE Fastbreakers 3rd",
                    "team1Id": 7548,
                    "team2": "Madison 3rd",
                    "team2Id": 7549,
                    "team1Score": "16",
                    "team2Score": "28",
                    "time": "2016-03-20T11:00:00"
                },
                {
                    "id": 14998,
                    "location": "North Laurel Comm. Center Ct. 6",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1011,
                    "team1": "Maryland Playmakers 6th",
                    "team1Id": 7562,
                    "team2": "MD Wolfpack 6th",
                    "team2Id": 7560,
                    "team1Score": "60",
                    "team2Score": "37",
                    "time": "2016-03-20T11:00:00"
                },
                {
                    "id": 14999,
                    "location": "North Laurel Comm. Center Ct. 6",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1011,
                    "team1": "HCYP Sharks BLUE 7th",
                    "team1Id": 7567,
                    "team2": "Hammond MS 7th",
                    "team2Id": 7565,
                    "team1Score": "38",
                    "team2Score": "52",
                    "time": "2016-03-20T12:00:00"
                },
                {
                    "id": 14992,
                    "location": "North Laurel Comm. Center Ct. 5",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1003,
                    "team1": "HCYP Sharks RED 7th",
                    "team1Id": 7566,
                    "team2": "Maryland Blazers 7th",
                    "team2Id": 7569,
                    "team1Score": "42",
                    "team2Score": "25",
                    "time": "2016-03-20T12:00:00"
                },
                {
                    "id": 15049,
                    "location": "Meadowbrook Ct. 1",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 3,
                    "team1": "HC Elite Green  9th",
                    "team1Id": 7589,
                    "team2": "Balt United South Red  9th",
                    "team2Id": 7590,
                    "team1Score": "29",
                    "team2Score": "50",
                    "time": "2016-03-20T12:00:00"
                },
                {
                    "id": 15064,
                    "location": "Meadowbrook Ct. 3",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 5,
                    "team1": "Team Melo 7th",
                    "team1Id": 7573,
                    "team2": "MD Finest  7th",
                    "team2Id": 7577,
                    "team1Score": "21",
                    "team2Score": "42",
                    "time": "2016-03-20T12:00:00"
                },
                {
                    "id": 15057,
                    "location": "Meadowbrook Ct. 2",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 4,
                    "team1": "Balt United South White 8th",
                    "team1Id": 7588,
                    "team2": "Millersville Hornets 8th",
                    "team2Id": 7587,
                    "team1Score": "35",
                    "team2Score": "55",
                    "time": "2016-03-20T12:00:00"
                },
                {
                    "id": 15072,
                    "location": "Meadowbrook Ct. 4",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 6,
                    "team1": "MARYLAND BUCKS  8th",
                    "team1Id": 7582,
                    "team2": "MD Pride  8th",
                    "team2Id": 7579,
                    "team1Score": "49",
                    "team2Score": "39",
                    "time": "2016-03-20T12:00:00"
                },
                {
                    "id": 15085,
                    "location": "North Laurel Comm. Center Ct. 5",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1003,
                    "team1": "Team Melo 4th",
                    "team1Id": 7550,
                    "team2": "Metro Celtics 4th",
                    "team2Id": 7607,
                    "team1Score": "50",
                    "team2Score": "48",
                    "time": "2016-03-20T13:00:00"
                },
                {
                    "id": 15073,
                    "location": "Meadowbrook Ct. 4",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 6,
                    "team1": "1UP Warriors  5th",
                    "team1Id": 7554,
                    "team2": "Md Playmakers 5th",
                    "team2Id": 7557,
                    "team1Score": "29",
                    "team2Score": "18",
                    "time": "2016-03-20T13:15:00"
                },
                {
                    "id": 15058,
                    "location": "Meadowbrook Ct. 2",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 4,
                    "team1": "DMV Swarm 8th",
                    "team1Id": 7584,
                    "team2": "HC Elite White  8th",
                    "team2Id": 7586,
                    "team1Score": "36",
                    "team2Score": "67",
                    "time": "2016-03-20T13:15:00"
                },
                {
                    "id": 15065,
                    "location": "Meadowbrook Ct. 3",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 5,
                    "team1": "Metro Celtics 7th",
                    "team1Id": 7571,
                    "team2": "DMV Swarm 7th",
                    "team2Id": 7572,
                    "team1Score": "49",
                    "team2Score": "43",
                    "time": "2016-03-20T13:15:00"
                },
                {
                    "id": 15050,
                    "location": "Meadowbrook Ct. 1",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 3,
                    "team1": "Team Sizzle (16U)",
                    "team1Id": 7599,
                    "team2": "Southern Tier  11th",
                    "team2Id": 7603,
                    "team1Score": "37",
                    "team2Score": "49",
                    "time": "2016-03-20T13:15:00"
                },
                {
                    "id": 14995,
                    "location": "North Laurel Comm. Center Ct. 5",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1003,
                    "team1": "Maryland Blazers 7th",
                    "team1Id": 7569,
                    "team2": "Columbia Ravens Black 7th",
                    "team2Id": 7568,
                    "team1Score": "22",
                    "team2Score": "40",
                    "time": "2016-03-20T14:00:00"
                },
                {
                    "id": 15001,
                    "location": "North Laurel Comm. Center Ct. 6",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1011,
                    "team1": "Team Rush 6th",
                    "team1Id": 7564,
                    "team2": "Maryland Playmakers 6th",
                    "team2Id": 7562,
                    "team1Score": "33",
                    "team2Score": "73",
                    "time": "2016-03-20T14:00:00"
                },
                {
                    "id": 15059,
                    "location": "Meadowbrook Ct. 2",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 4,
                    "team1": "Columbia Ravens Purple 5th",
                    "team1Id": 7552,
                    "team2": "Randallstown Running Rebels 6th",
                    "team2Id": 7558,
                    "team1Score": "27",
                    "team2Score": "48",
                    "time": "2016-03-20T14:15:00"
                },
                {
                    "id": 15066,
                    "location": "Meadowbrook Ct. 3",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 5,
                    "team1": "Columbia Ravens Black 6th",
                    "team1Id": 7559,
                    "team2": "MD Finest 6th",
                    "team2Id": 7556,
                    "team1Score": "23",
                    "team2Score": "36",
                    "time": "2016-03-20T14:15:00"
                },
                {
                    "id": 15074,
                    "location": "Meadowbrook Ct. 4",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 6,
                    "team1": "HCYP Sharks  8th",
                    "team1Id": 7581,
                    "team2": "MD Pride  8th",
                    "team2Id": 7579,
                    "team1Score": "25",
                    "team2Score": "34",
                    "time": "2016-03-20T14:15:00"
                },
                {
                    "id": 15051,
                    "location": "Meadowbrook Ct. 1",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 3,
                    "team1": "Franklin Force - 11th",
                    "team1Id": 7600,
                    "team2": "Hoopmasters  Cole 11th",
                    "team2Id": 7601,
                    "team1Score": "61",
                    "team2Score": "50",
                    "time": "2016-03-20T14:15:00"
                },
                {
                    "id": 15000,
                    "location": "North Laurel Comm. Center Ct. 6",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1011,
                    "team1": "Madison 4th",
                    "team1Id": 7553,
                    "team2": "Brooklyn Park Cyclones 4th",
                    "team2Id": 7551,
                    "team1Score": "52",
                    "team2Score": "17",
                    "time": "2016-03-20T15:00:00"
                },
                {
                    "id": 15080,
                    "location": "North Laurel Comm. Center Ct. 5",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1003,
                    "team1": "Team Melo 4th",
                    "team1Id": 7550,
                    "team2": "Baltimore United 4th",
                    "team2Id": 7605,
                    "team1Score": "30",
                    "team2Score": "21",
                    "time": "2016-03-20T15:00:00"
                },
                {
                    "id": 15075,
                    "location": "Meadowbrook Ct. 4",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 6,
                    "team1": "MD Warriors 10th",
                    "team1Id": 7595,
                    "team2": "Franklin Force - Gembe 10th",
                    "team2Id": 7596,
                    "team1Score": "31",
                    "team2Score": "59",
                    "time": "2016-03-20T15:15:00"
                },
                {
                    "id": 15067,
                    "location": "Meadowbrook Ct. 3",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 5,
                    "team1": "Columbia Ravens 7th Purple",
                    "team1Id": 7574,
                    "team2": "MD Finest  7th",
                    "team2Id": 7577,
                    "team1Score": "34",
                    "team2Score": "45",
                    "time": "2016-03-20T15:15:00"
                },
                {
                    "id": 15060,
                    "location": "Meadowbrook Ct. 2",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 4,
                    "team1": "Savage Shockers  8th",
                    "team1Id": 7585,
                    "team2": "Madison  8th",
                    "team2Id": 7578,
                    "team1Score": "26",
                    "team2Score": "53",
                    "time": "2016-03-20T15:15:00"
                },
                {
                    "id": 15052,
                    "location": "Meadowbrook Ct. 1",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 3,
                    "team1": "Team Sizzle (16U)",
                    "team1Id": 7599,
                    "team2": "HC Elite  11th",
                    "team2Id": 7602,
                    "team1Score": "34",
                    "team2Score": "23",
                    "time": "2016-03-20T15:15:00"
                },
                {
                    "id": 14994,
                    "location": "North Laurel Comm. Center Ct. 5",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1003,
                    "team1": "DC Playmakers 6th",
                    "team1Id": 7563,
                    "team2": "MARYLAND BUCKS 6th",
                    "team2Id": 7561,
                    "team1Score": "29",
                    "team2Score": "25",
                    "time": "2016-03-20T16:00:00"
                },
                {
                    "id": 15088,
                    "location": "North Laurel Comm. Center Ct. 6",
                    "locationUrl": "http://goo.gl/maps/DlXFH",
                    "locationId": 1011,
                    "team1": "Team Rush 3rd",
                    "team1Id": 7555,
                    "team2": "Madison 4th",
                    "team2Id": 7553,
                    "team1Score": "34",
                    "team2Score": "28",
                    "time": "2016-03-20T16:00:00"
                },
                {
                    "id": 15068,
                    "location": "Meadowbrook Ct. 3",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 5,
                    "team1": "Columbia Ravens Black 6th",
                    "team1Id": 7559,
                    "team2": "Md Playmakers 5th",
                    "team2Id": 7557,
                    "team1Score": "45",
                    "team2Score": "44",
                    "time": "2016-03-20T16:15:00"
                },
                {
                    "id": 15076,
                    "location": "Meadowbrook Ct. 4",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 6,
                    "team1": "1UP Warriors  5th",
                    "team1Id": 7554,
                    "team2": "Randallstown Running Rebels 6th",
                    "team2Id": 7558,
                    "team1Score": "23",
                    "team2Score": "54",
                    "time": "2016-03-20T16:15:00"
                },
                {
                    "id": 15053,
                    "location": "Meadowbrook Ct. 1",
                    "locationUrl": "http://goo.gl/rHw5Rj",
                    "locationId": 3,
                    "team1": "Franklin Force - 11th",
                    "team1Id": 7600,
                    "team2": "Southern Tier  11th",
                    "team2Id": 7603,
                    "team1Score": "59",
                    "team2Score": "40",
                    "time": "2016-03-20T16:15:00"
                }
            ],
            "standings": [
                {
                    "divisionName": "3rd",
                    "divisionStandings": [
                        {
                            "teamId": 7547,
                            "teamName": "Playmakers Red 3rd",
                            "wins": 4,
                            "losses": 0,
                            "winningPct": "1.000",
                            "pointsFor": 125,
                            "pointsAgainst": 76,
                            "pointsDiff": 49
                        },
                        {
                            "teamId": 7546,
                            "teamName": "Playmakers Black 3rd",
                            "wins": 3,
                            "losses": 1,
                            "winningPct": ".750",
                            "pointsFor": 140,
                            "pointsAgainst": 109,
                            "pointsDiff": 31
                        },
                        {
                            "teamId": 7555,
                            "teamName": "Team Rush 3rd",
                            "wins": 3,
                            "losses": 2,
                            "winningPct": ".600",
                            "pointsFor": 170,
                            "pointsAgainst": 146,
                            "pointsDiff": 24
                        },
                        {
                            "teamId": 7549,
                            "teamName": "Madison 3rd",
                            "wins": 1,
                            "losses": 3,
                            "winningPct": ".250",
                            "pointsFor": 79,
                            "pointsAgainst": 95,
                            "pointsDiff": -16
                        },
                        {
                            "teamId": 7548,
                            "teamName": "MADE Fastbreakers 3rd",
                            "wins": 0,
                            "losses": 4,
                            "winningPct": ".000",
                            "pointsFor": 78,
                            "pointsAgainst": 160,
                            "pointsDiff": -82
                        }
                    ]
                },
                {
                    "divisionName": "4th",
                    "divisionStandings": [
                        {
                            "teamId": 7553,
                            "teamName": "Madison 4th",
                            "wins": 4,
                            "losses": 1,
                            "winningPct": ".800",
                            "pointsFor": 172,
                            "pointsAgainst": 112,
                            "pointsDiff": 60
                        },
                        {
                            "teamId": 7550,
                            "teamName": "Team Melo 4th",
                            "wins": 3,
                            "losses": 1,
                            "winningPct": ".750",
                            "pointsFor": 150,
                            "pointsAgainst": 119,
                            "pointsDiff": 31
                        },
                        {
                            "teamId": 7607,
                            "teamName": "Metro Celtics 4th",
                            "wins": 2,
                            "losses": 2,
                            "winningPct": ".500",
                            "pointsFor": 146,
                            "pointsAgainst": 135,
                            "pointsDiff": 11
                        },
                        {
                            "teamId": 7605,
                            "teamName": "Baltimore United 4th",
                            "wins": 1,
                            "losses": 3,
                            "winningPct": ".250",
                            "pointsFor": 91,
                            "pointsAgainst": 101,
                            "pointsDiff": -10
                        },
                        {
                            "teamId": 7551,
                            "teamName": "Brooklyn Park Cyclones 4th",
                            "wins": 0,
                            "losses": 4,
                            "winningPct": ".000",
                            "pointsFor": 71,
                            "pointsAgainst": 169,
                            "pointsDiff": -98
                        }
                    ]
                },
                {
                    "divisionName": "5th-6th",
                    "divisionStandings": [
                        {
                            "teamId": 7558,
                            "teamName": "Randallstown Running Rebels 6th",
                            "wins": 4,
                            "losses": 0,
                            "winningPct": "1.000",
                            "pointsFor": 171,
                            "pointsAgainst": 90,
                            "pointsDiff": 81
                        },
                        {
                            "teamId": 7556,
                            "teamName": "MD Finest 6th",
                            "wins": 3,
                            "losses": 1,
                            "winningPct": ".750",
                            "pointsFor": 181,
                            "pointsAgainst": 101,
                            "pointsDiff": 80
                        },
                        {
                            "teamId": 7559,
                            "teamName": "Columbia Ravens Black 6th",
                            "wins": 2,
                            "losses": 2,
                            "winningPct": ".500",
                            "pointsFor": 124,
                            "pointsAgainst": 142,
                            "pointsDiff": -18
                        },
                        {
                            "teamId": 7554,
                            "teamName": "1UP Warriors  5th",
                            "wins": 2,
                            "losses": 2,
                            "winningPct": ".500",
                            "pointsFor": 109,
                            "pointsAgainst": 144,
                            "pointsDiff": -35
                        },
                        {
                            "teamId": 7552,
                            "teamName": "Columbia Ravens Purple 5th",
                            "wins": 1,
                            "losses": 3,
                            "winningPct": ".250",
                            "pointsFor": 127,
                            "pointsAgainst": 155,
                            "pointsDiff": -28
                        },
                        {
                            "teamId": 7557,
                            "teamName": "Md Playmakers 5th",
                            "wins": 0,
                            "losses": 4,
                            "winningPct": ".000",
                            "pointsFor": 119,
                            "pointsAgainst": 199,
                            "pointsDiff": -80
                        }
                    ]
                },
                {
                    "divisionName": "6th",
                    "divisionStandings": [
                        {
                            "teamId": 7562,
                            "teamName": "Maryland Playmakers 6th",
                            "wins": 4,
                            "losses": 0,
                            "winningPct": "1.000",
                            "pointsFor": 237,
                            "pointsAgainst": 158,
                            "pointsDiff": 79
                        },
                        {
                            "teamId": 7563,
                            "teamName": "DC Playmakers 6th",
                            "wins": 3,
                            "losses": 1,
                            "winningPct": ".750",
                            "pointsFor": 154,
                            "pointsAgainst": 140,
                            "pointsDiff": 14
                        },
                        {
                            "teamId": 7560,
                            "teamName": "MD Wolfpack 6th",
                            "wins": 2,
                            "losses": 2,
                            "winningPct": ".500",
                            "pointsFor": 172,
                            "pointsAgainst": 173,
                            "pointsDiff": -1
                        },
                        {
                            "teamId": 7564,
                            "teamName": "Team Rush 6th",
                            "wins": 1,
                            "losses": 3,
                            "winningPct": ".250",
                            "pointsFor": 125,
                            "pointsAgainst": 206,
                            "pointsDiff": -81
                        },
                        {
                            "teamId": 7561,
                            "teamName": "MARYLAND BUCKS 6th",
                            "wins": 0,
                            "losses": 4,
                            "winningPct": ".000",
                            "pointsFor": 147,
                            "pointsAgainst": 158,
                            "pointsDiff": -11
                        }
                    ]
                },
                {
                    "divisionName": "7th Green",
                    "divisionStandings": [
                        {
                            "teamId": 7566,
                            "teamName": "HCYP Sharks RED 7th",
                            "wins": 4,
                            "losses": 0,
                            "winningPct": "1.000",
                            "pointsFor": 161,
                            "pointsAgainst": 113,
                            "pointsDiff": 48
                        },
                        {
                            "teamId": 7568,
                            "teamName": "Columbia Ravens Black 7th",
                            "wins": 3,
                            "losses": 1,
                            "winningPct": ".750",
                            "pointsFor": 150,
                            "pointsAgainst": 111,
                            "pointsDiff": 39
                        },
                        {
                            "teamId": 7569,
                            "teamName": "Maryland Blazers 7th",
                            "wins": 2,
                            "losses": 2,
                            "winningPct": ".500",
                            "pointsFor": 132,
                            "pointsAgainst": 130,
                            "pointsDiff": 2
                        },
                        {
                            "teamId": 7565,
                            "teamName": "Hammond MS 7th",
                            "wins": 1,
                            "losses": 3,
                            "winningPct": ".250",
                            "pointsFor": 136,
                            "pointsAgainst": 158,
                            "pointsDiff": -22
                        },
                        {
                            "teamId": 7567,
                            "teamName": "HCYP Sharks BLUE 7th",
                            "wins": 0,
                            "losses": 4,
                            "winningPct": ".000",
                            "pointsFor": 105,
                            "pointsAgainst": 172,
                            "pointsDiff": -67
                        }
                    ]
                },
                {
                    "divisionName": "7th White",
                    "divisionStandings": [
                        {
                            "teamId": 7577,
                            "teamName": "MD Finest  7th",
                            "wins": 4,
                            "losses": 0,
                            "winningPct": "1.000",
                            "pointsFor": 179,
                            "pointsAgainst": 115,
                            "pointsDiff": 64
                        },
                        {
                            "teamId": 7575,
                            "teamName": "HC Elite White  7th",
                            "wins": 4,
                            "losses": 0,
                            "winningPct": "1.000",
                            "pointsFor": 187,
                            "pointsAgainst": 147,
                            "pointsDiff": 40
                        },
                        {
                            "teamId": 7574,
                            "teamName": "Columbia Ravens 7th Purple",
                            "wins": 2,
                            "losses": 2,
                            "winningPct": ".500",
                            "pointsFor": 168,
                            "pointsAgainst": 144,
                            "pointsDiff": 24
                        },
                        {
                            "teamId": 7573,
                            "teamName": "Team Melo 7th",
                            "wins": 2,
                            "losses": 2,
                            "winningPct": ".500",
                            "pointsFor": 147,
                            "pointsAgainst": 154,
                            "pointsDiff": -7
                        },
                        {
                            "teamId": 7576,
                            "teamName": "HC Elite Green 7th",
                            "wins": 2,
                            "losses": 2,
                            "winningPct": ".500",
                            "pointsFor": 195,
                            "pointsAgainst": 203,
                            "pointsDiff": -8
                        },
                        {
                            "teamId": 7571,
                            "teamName": "Metro Celtics 7th",
                            "wins": 2,
                            "losses": 2,
                            "winningPct": ".500",
                            "pointsFor": 131,
                            "pointsAgainst": 157,
                            "pointsDiff": -26
                        },
                        {
                            "teamId": 7572,
                            "teamName": "DMV Swarm 7th",
                            "wins": 0,
                            "losses": 4,
                            "winningPct": ".000",
                            "pointsFor": 184,
                            "pointsAgainst": 217,
                            "pointsDiff": -33
                        },
                        {
                            "teamId": 7570,
                            "teamName": "MARYLAND BUCKS 7th",
                            "wins": 0,
                            "losses": 4,
                            "winningPct": ".000",
                            "pointsFor": 108,
                            "pointsAgainst": 162,
                            "pointsDiff": -54
                        }
                    ]
                },
                {
                    "divisionName": "8th Green",
                    "divisionStandings": [
                        {
                            "teamId": 7578,
                            "teamName": "Madison  8th",
                            "wins": 4,
                            "losses": 0,
                            "winningPct": "1.000",
                            "pointsFor": 277,
                            "pointsAgainst": 117,
                            "pointsDiff": 160
                        },
                        {
                            "teamId": 7582,
                            "teamName": "MARYLAND BUCKS  8th",
                            "wins": 3,
                            "losses": 1,
                            "winningPct": ".750",
                            "pointsFor": 208,
                            "pointsAgainst": 159,
                            "pointsDiff": 49
                        },
                        {
                            "teamId": 7579,
                            "teamName": "MD Pride  8th",
                            "wins": 3,
                            "losses": 1,
                            "winningPct": ".750",
                            "pointsFor": 175,
                            "pointsAgainst": 136,
                            "pointsDiff": 39
                        },
                        {
                            "teamId": 7581,
                            "teamName": "HCYP Sharks  8th",
                            "wins": 2,
                            "losses": 2,
                            "winningPct": ".500",
                            "pointsFor": 136,
                            "pointsAgainst": 148,
                            "pointsDiff": -12
                        },
                        {
                            "teamId": 7585,
                            "teamName": "Savage Shockers  8th",
                            "wins": 0,
                            "losses": 4,
                            "winningPct": ".000",
                            "pointsFor": 124,
                            "pointsAgainst": 179,
                            "pointsDiff": -55
                        },
                        {
                            "teamId": 7580,
                            "teamName": "Warriors 8th",
                            "wins": 0,
                            "losses": 4,
                            "winningPct": ".000",
                            "pointsFor": 108,
                            "pointsAgainst": 289,
                            "pointsDiff": -181
                        }
                    ]
                },
                {
                    "divisionName": "8th White",
                    "divisionStandings": [
                        {
                            "teamId": 7586,
                            "teamName": "HC Elite White  8th",
                            "wins": 4,
                            "losses": 0,
                            "winningPct": "1.000",
                            "pointsFor": 216,
                            "pointsAgainst": 128,
                            "pointsDiff": 88
                        },
                        {
                            "teamId": 7587,
                            "teamName": "Millersville Hornets 8th",
                            "wins": 3,
                            "losses": 1,
                            "winningPct": ".750",
                            "pointsFor": 204,
                            "pointsAgainst": 176,
                            "pointsDiff": 28
                        },
                        {
                            "teamId": 7584,
                            "teamName": "DMV Swarm 8th",
                            "wins": 1,
                            "losses": 3,
                            "winningPct": ".250",
                            "pointsFor": 197,
                            "pointsAgainst": 221,
                            "pointsDiff": -24
                        },
                        {
                            "teamId": 7583,
                            "teamName": "Metro Celtics 8th",
                            "wins": 1,
                            "losses": 3,
                            "winningPct": ".250",
                            "pointsFor": 148,
                            "pointsAgainst": 187,
                            "pointsDiff": -39
                        },
                        {
                            "teamId": 7588,
                            "teamName": "Balt United South White 8th",
                            "wins": 1,
                            "losses": 3,
                            "winningPct": ".250",
                            "pointsFor": 132,
                            "pointsAgainst": 185,
                            "pointsDiff": -53
                        }
                    ]
                },
                {
                    "divisionName": "9th",
                    "divisionStandings": [
                        {
                            "teamId": 7591,
                            "teamName": "Anne Arundel Ballhawks 9th",
                            "wins": 4,
                            "losses": 0,
                            "winningPct": "1.000",
                            "pointsFor": 233,
                            "pointsAgainst": 171,
                            "pointsDiff": 62
                        },
                        {
                            "teamId": 7590,
                            "teamName": "Balt United South Red  9th",
                            "wins": 3,
                            "losses": 1,
                            "winningPct": ".750",
                            "pointsFor": 194,
                            "pointsAgainst": 170,
                            "pointsDiff": 24
                        },
                        {
                            "teamId": 7593,
                            "teamName": "Columbia Ravens - Held 9h",
                            "wins": 2,
                            "losses": 2,
                            "winningPct": ".500",
                            "pointsFor": 185,
                            "pointsAgainst": 194,
                            "pointsDiff": -9
                        },
                        {
                            "teamId": 7589,
                            "teamName": "HC Elite Green  9th",
                            "wins": 1,
                            "losses": 3,
                            "winningPct": ".250",
                            "pointsFor": 158,
                            "pointsAgainst": 190,
                            "pointsDiff": -32
                        },
                        {
                            "teamId": 7592,
                            "teamName": "Hoopmasters  BC 9th",
                            "wins": 0,
                            "losses": 4,
                            "winningPct": ".000",
                            "pointsFor": 158,
                            "pointsAgainst": 203,
                            "pointsDiff": -45
                        }
                    ]
                },
                {
                    "divisionName": "HS Green",
                    "divisionStandings": [
                        {
                            "teamId": 7597,
                            "teamName": "Team Dedicaion 10th",
                            "wins": 3,
                            "losses": 1,
                            "winningPct": ".750",
                            "pointsFor": 224,
                            "pointsAgainst": 154,
                            "pointsDiff": 70
                        },
                        {
                            "teamId": 7596,
                            "teamName": "Franklin Force - Gembe 10th",
                            "wins": 3,
                            "losses": 1,
                            "winningPct": ".750",
                            "pointsFor": 209,
                            "pointsAgainst": 159,
                            "pointsDiff": 50
                        },
                        {
                            "teamId": 7598,
                            "teamName": "Carroll Basketball 10th",
                            "wins": 3,
                            "losses": 1,
                            "winningPct": ".750",
                            "pointsFor": 203,
                            "pointsAgainst": 164,
                            "pointsDiff": 39
                        },
                        {
                            "teamId": 7594,
                            "teamName": "DMV Running Rebels Boys 10th",
                            "wins": 1,
                            "losses": 3,
                            "winningPct": ".250",
                            "pointsFor": 188,
                            "pointsAgainst": 168,
                            "pointsDiff": 20
                        },
                        {
                            "teamId": 7606,
                            "teamName": "Lions - 10th",
                            "wins": 0,
                            "losses": 0,
                            "winningPct": ".000",
                            "pointsFor": 0,
                            "pointsAgainst": 0,
                            "pointsDiff": 0
                        },
                        {
                            "teamId": 7595,
                            "teamName": "MD Warriors 10th",
                            "wins": 0,
                            "losses": 4,
                            "winningPct": ".000",
                            "pointsFor": 71,
                            "pointsAgainst": 250,
                            "pointsDiff": -179
                        }
                    ]
                },
                {
                    "divisionName": "HS White",
                    "divisionStandings": [
                        {
                            "teamId": 7599,
                            "teamName": "Team Sizzle (16U)",
                            "wins": 3,
                            "losses": 1,
                            "winningPct": ".750",
                            "pointsFor": 202,
                            "pointsAgainst": 164,
                            "pointsDiff": 38
                        },
                        {
                            "teamId": 7600,
                            "teamName": "Franklin Force - 11th",
                            "wins": 3,
                            "losses": 1,
                            "winningPct": ".750",
                            "pointsFor": 220,
                            "pointsAgainst": 199,
                            "pointsDiff": 21
                        },
                        {
                            "teamId": 7602,
                            "teamName": "HC Elite  11th",
                            "wins": 2,
                            "losses": 2,
                            "winningPct": ".500",
                            "pointsFor": 170,
                            "pointsAgainst": 177,
                            "pointsDiff": -7
                        },
                        {
                            "teamId": 7603,
                            "teamName": "Southern Tier  11th",
                            "wins": 1,
                            "losses": 3,
                            "winningPct": ".250",
                            "pointsFor": 172,
                            "pointsAgainst": 186,
                            "pointsDiff": -14
                        },
                        {
                            "teamId": 7601,
                            "teamName": "Hoopmasters  Cole 11th",
                            "wins": 1,
                            "losses": 3,
                            "winningPct": ".250",
                            "pointsFor": 191,
                            "pointsAgainst": 229,
                            "pointsDiff": -38
                        }
                    ]
                }
            ]
        };
       function getLeagues() {

          return leagues;
       }


       function getLeagueData () {

          return leagueData;
       }


       return {
           getLeagues: getLeagues,
           getLeagueData: getLeagueData
       }
    }
})();