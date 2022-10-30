const request = require('postman-request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.weatherstack.com/current?access_key=22874d258e0bf042fa838a229fb6d1be&query=' +latitude + ',' + longitude + '&units=f'

    request({ url: url, json: true} , (error, response) => {
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if( response.body.error){
            callback('unabke to find location', undefined)

        } else {
            callback(undefined, response.body.current.weather_description[0] + 'It is currently ' + response.body.current.temperature + ' degrees out. It feels like ' + response.body.current.feelsLike + ' degrees out')

        }
    })
}

module.exports = forecast
