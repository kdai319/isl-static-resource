isl['weather']={
	getWeatherInfo:function(o) {
		if(!o || webix.isArray(o) || isl.isEmpty(o)) {
			return isl.locale.weather.load;
		} else {
			return ['<img src="/img/weather/'+o.weather_cond_code+'.png" style="width:40px;height:40px;vertical-align:middle;margin-top:-8px;"><span>'+o.weather_cond_txt,
				isl.locale.weather.tmp.v+o.weather_tmp+'('+o.weather_fl+')'+isl.locale.weather.tmp.unit,
				isl.locale.weather.hum+o.weather_hum+'%', isl.locale.weather.rain+o.weather_pcpn+'mm',
				isl.locale.weather.wind+o.weather_wind_dir+'('+o.weather_wind_spd+'m/h)',
				new Date(o.weather_update).format('hh:mm:ss yyyy-MM-dd')+'</span>'
			].join('&nbsp&nbsp');
		}
	},

	refresh:function(o) {
		let weatherInfo=$$('weatherInfo');
		if(weatherInfo) {
			weatherInfo.setValue(isl.weather.getWeatherInfo(o));
		}
	}
};