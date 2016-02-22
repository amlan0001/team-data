(function () {
    var data = [{ id: 1, name: "Amlan", teamid: 1, track: "Dot Net" },
    { id: 2, name: "Ayush", teamid: 2, track: "Java" },
    { id: 3, name: "Mayank", teamid: 1, track: "Dot Net" },
    { id: 4, name: "Shobhit", teamid: 3, track: "Java" },
    { id: 5, name: "Palak", teamid: 4, track: "C++" },
    { id: 6, name: "Charmi", teamid: 2, track: "Dot Net" },
    { id: 7, name: "Apeksha", teamid: 5, track: "Dot Net" },
    { id: 8, name: "Shubham", teamid: 4, track: "C++" },
    { id: 9, name: "Navneet", teamid: 3, track: "PHP" },
    { id: 10, name: "Padmanav", teamid: 2, track: "C++" },
    { id: 11, name: "Subha", teamid: 4, track: "PHP" },
    { id: 12, name: "Tonmoy", teamid: 5, track: "PHP" },
    { id: 13, name: "Alok", teamid: 4, track: "PHP" },
    { id: 14, name: "Arpit", teamid: 2, track: "Dot Net" },
    { id: 15, name: "Arjun", teamid: 1, track: "Dot Net" },
    { id: 16, name: "Parshav", teamid: 3, track: "Python" },
    { id: 17, name: "Shivender", teamid: 4, track: "Dot Net" },
    { id: 18, name: "Paras", teamid: 5, track: "Python" },
    { id: 19, name: "Hemant", teamid: 5, track: "Dot Net" },
    { id: 20, name: "Ankush", teamid: 1, track: "Java" }, ];

    var app = angular.module("teamsApp", []);
    var TeamDataController = function ($scope,$interval) {

        $scope.student_data = data;
        
        var update = function () {
            
            

        };


        $interval(update, 1000);

    };
    app.controller("teamsDataController",['$scope','$interval', TeamDataController]);


}());