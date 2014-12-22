$('.collapse').collapse({toggle:true});
var startupControllers = angular.module('startupControllers', []);

startupControllers.controller('StartupCtrl', ['$scope', '$http', '$timeout', 'Container', function($scope, $http, $timeout, Container) {
  $scope.container_template =  [
      {
        "gateway": "172.16.13.1",
        "eths": [
            [
                "testDockerflyv0",
                "eth0",
                "172.16.13.100/24"
            ]
        ],
        "image_name": "172.16.11.13:5000/brain/centos:centos6_sshd",
        "run_cmd": "/usr/sbin/sshd -D",
        "resize": 51200,
        "id":null,
        "pid":null,
        "status":"running",
        "container_name":"test_dockerfly",
        "last_modify_time":0,
        "desc":"testfor dockerflyui"
    }
  ];

  $scope.createContainer = function(container_template) {
    console.log("create container")
    console.log(container_template);
    $http.post('/api/containers', data=container_template);
  };

  $scope.$on('json-updated', function(msg, value) {
    $scope.container_template = value;
    console.log(value);
  });

}])

