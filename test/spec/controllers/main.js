'use strict';

describe('Controller: ScheduleController', function () {

  // load the controller's module
  beforeEach(module('tvScheduleApp'));

  var ScheduleController,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ScheduleController = $controller('ScheduleController', {
      $scope: scope
    });
  }));

  xit('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
