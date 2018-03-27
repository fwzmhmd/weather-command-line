const weather = require('./weather');

const currentWeather = process.argv.slice(2);

currentWeather.forEach(weather.get);