var request = require('request');

request('http://samples.openweathermap.org/data/2.5/weather?lat=-24.98&lon=-53.5&appid=6e56a470237bd4658a837a6d2a6d0ef7', function(error, response, body){
	console.log('error: ', error);
	console.log('statusCode: ', response && response.statusCode);
	
	var clima = JSON.parse(body);
	console.log('A temperatura atual em Cascavel é de ' + clima.main.temp)



});