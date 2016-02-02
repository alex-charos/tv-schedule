'use strict';

describe('Service: ScheduleService', function () {

  var scheduleService;
  beforeEach(function(){
   scheduleService=  angular.module('scheduleService') ;

  });

   
  it('should tranform the schedule Resonse', function () {
    var oteData = {channels:[], titles:{}};
    var index = 300;
    for(var i = 0; i < 4; i++)
    {
    	oteData.channels.push({id:i,name:'n'+i});
    	oteData.titles[i]= {};
    	for (var j = 0; j < 5; j++)
    	{
    		oteData.titles[i][index] = {start:'02:00',stop:'04:00',title:'pao-osfp',category:'Sports'};
    		index++;
    	}

    }

    var ourData = scheduleService.transformScheduleResponse(angular.toJson(oteData),undefined);
    expect(ourData.length).toBe(4); 
    expect(ourData[0].titles.length).toBe(5);

  }); 
});
