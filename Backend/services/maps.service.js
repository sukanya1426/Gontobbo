const axios = require('axios');

module.exports.getAddressCoordinates = async (address) => {
    const apiKey = process.env.GOOGLE_MAPS_API;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        if (response.data.status === 'OK') {
            const location = response.data.results[0].geometry.location;
            return {
                lat: location.lat,
                lng: location.lng
            };
        } else {
            throw new Error('Geocoding failed: ' + response.data.status);
        }
    } catch (error) {
        console.error('Error fetching coordinates:', error);
        throw error;
    }
}

module.exports.getDistanceAndTime = async (origin, destination) => {

  if (!origin || !destination) {
    return { error: 'Origin and destination are required' };
  }
  const apiKey = process.env.GOOGLE_MAPS_API;
  const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;

  try{
    const response = await axios.get(url);
    if (response.status !== 200) {
      throw new Error('Network response was not ok');
    }
    const data = response.data;

    if (data.status !== 'OK') {
      throw new Error(data.error_message || 'Failed to fetch distance and time');
    }

    const result = data.rows[0].elements[0];
    return {
      distance: result.distance.text,
      duration: result.duration.text
    };

  }catch (error) {
    console.error('Error fetching distance and time:', error);
    return { error: 'Failed to fetch distance and time' };
  }

 
  
}