const http = require('http');
const api = require('./api');

const printWeather = (location, temperature) => {
    const msg = `The Current Weather in ${location} is ${temperature} Degrees Celcius`;
    console.log(msg);
}

const printError = error => {
    console.error(error.message);
}

const weather = location => {
    try {
        const req = http.get(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&APPID=${api.key}`, (res) => {
            if (res.statusCode === 200) {
                let body = '';
                // Read data
                res.on('data', d => {
                    body += d.toString();
                });

                // End data
                res.on('end', () => {
                    try {
                        const info = JSON.parse(body);
                        if (info.name) {
                            printWeather(info.name, info.main.temp);
                        } else {
                            const queryError = new Error(`The "${location}" was not found`);
                            printError(queryError);
                        }
                    } catch (error) {
                        printError(error);
                    }
                });
            } else if (res.statusCode === 401) {
                const invalidKey = new Error(`Please enter a valid API Key. (${http.STATUS_CODES[res.statusCode]})`);
                printError(invalidKey);
            } else {
                const statusCodeError = new Error(`City not found. (${res.statusCode})`);
                printError(statusCodeError);
            }
        });
        req.on('error', printError);
    }
    catch (error) {
        printError(error);
    }
}

module.exports.get = weather;