
'use strict';

var scheduleService = angular.module('scheduleService', ['ngResource'] );


	scheduleService.transformScheduleResponse = function(data,headers)
	{
		data = angular.fromJson(data);
		var channels = [];
		for(var i =0; i< data.channels.length; i++)
		{
			var chObj = {id:data.channels[i].id,desc:data.channels[i].name,titles:[]};
			var titlObj = data.titles[data.channels[i].id];
			for(var key in titlObj)
			{
				chObj.titles.push(titlObj[key]);
			}

			channels.push(chObj);

		}

		return channels;

	};
	 

	 scheduleService.factory('Schedule', function($resource){
		var service = $resource('/ote/ProgramListServlet?t=adsl&d=:date', {}, {
			query:{
				transformResponse: scheduleService.transformScheduleResponse,
				isArray:  true
			}	
			
        }
		);
        return service;
    });
