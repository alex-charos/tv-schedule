
'use strict';

var scheduleService = angular.module('scheduleService', ['ngResource'] );


	scheduleService.transformScheduleResponse = function(data,headers)
	{
		data = angular.fromJson(data);
		console.log('data:');
		console.log(data);
		var channels = [];
		for(var i =0; i< data.channels.length; i++)
		{
			var chObj = {id:data.channels[i].ID,desc:data.channels[i].channelName,titles:data.channels[i].shows};
			
			channels.push(chObj);

		}

		return channels;

	};
	 

	 scheduleService.factory('Schedule', function($resource){
		var service = $resource('https://cors-anywhere.herokuapp.com/https://www.cosmote.gr/portal/residential/program?p_p_id=dayprogram_WAR_OTETVportlet&p_p_lifecycle=2&p_p_state=normal&p_p_mode=view&p_p_cacheability=cacheLevelPage&p_p_col_id=column-4&p_p_col_count=1&_dayprogram_WAR_OTETVportlet_platform=IPTV&_dayprogram_WAR_OTETVportlet_start=15&_dayprogram_WAR_OTETVportlet_feedType=EPG&_dayprogram_WAR_OTETVportlet_categoryId=-1&_dayprogram_WAR_OTETVportlet_date=:date&_dayprogram_WAR_OTETVportlet_end=102', {}, {
			query:{
				transformResponse: scheduleService.transformScheduleResponse,
				isArray:  true
			}	
			
        }
		);
        return service;
    });
