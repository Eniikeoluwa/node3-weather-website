const request = require('postman-request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiZW5paWtlb2x1d2EiLCJhIjoiY2w5Y3J1NXZ5MXcydDNwbG1qOGpycGh6diJ9.ydMUkI0om6t8bnUl0qoYOA'

    request({ url: url, json: true}, (error, response) => {
        if(error) {
            callback('unable to connect to location service', undefined)
        } else if (response.body.features.length === 0) {
            callback('Unabe to find location. Try another search', undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            }) 
        }  
    })
}

geocode('Philadelphia', (error, data) => {
    console.log('Error', error)
    console.log('Data', data)

})

module.exports = geocode
