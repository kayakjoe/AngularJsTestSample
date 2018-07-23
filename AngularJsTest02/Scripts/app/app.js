(function () {
    var appMod = null;
    appMod = angular.module("test01", []);

    appMod.service("srvCalc", function () {
        this.calcTwo = function (inputVal1, inputVal2) {
            return parseInt(inputVal1) + parseInt(inputVal2);
        };

    });

    appMod.controller('HomeCtrl', function ($scope, srvCalc) {
        this.value1;
        this.value2;
        this.sumResult;
        this.getUrl;
        this.errorTest;
        $scope.employees = [
            {
                firstName: 'Joe',
                lastName: 'Tester'
            },
            {
                firstName: 'John',
                lastName: 'Fisherman'
            },
            {
                firstName: 'Matthew',
                lastName: 'Taxman'
            }
        ];
        this.radioTests = ['firstTest', 'secondTest', 'thirdTest']
        this.calc = function () {
            this.sumResult = srvCalc.calcTwo(this.value1, this.value2);
        }
        this.getUrl = function () {
            if (this.errorTest) {
                return '../Templates/PlainTableRepeat.html';
            } else {
                return '../Templates/TableRepeat.html';
            }
        };
        this.showRadioArea = function () {
            //do something after radio list loaded
        };
    });

    appMod.controller('HomeCtrl3', function ($http) {
        var vm = this;
        var GetSuccess;
        var GetError;
        vm.errorMsg = '';
        vm.courses = [];

        vm.loadData = function () {
            vm.errorMsg = '';
            $http.get("../TestData/courses.json").then(function (response) { GetSuccess(response); },
                function (response) { GetError(response); });
        };

        GetSuccess = function GetSuccessDec(response) {
            vm.courses = response.data;
            var testcount = this.courses.length;
            //$scope.$apply();


        };
        GetError = function GetSuccessDec(response) {
            vm.errMsg = response.status + ' ' + reponse.statusText;

        };
    });

    appMod.controller('Home2', function ($scope) {
        $scope.value1;
        $scope.value2;
        $scope.sumResult;
        $scope.getUrl;
        $scope.errorTest;
        $scope.rowLimit;
        $scope.employees = [
            {
                firstName: 'Joe',
                lastName: 'Tester'
            },
            {
                firstName: 'Peter',
                lastName: 'Fisherman'
            },
            {
                firstName: 'Paul',
                lastName: 'Apostle'
            }
        ];
        $scope.calc = function () {
            $scope.sumResult = parseInt($scope.value1) + parseInt($scope.value2);
        };

        $scope.getUrl = function() {
            if ($scope.errorTest) {
                return '../Templates/PlainTableRepeat.html';
            } else {
                return '../Templates/TableRepeat.html';
            }
        };

    });
}());

