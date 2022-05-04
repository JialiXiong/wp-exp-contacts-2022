const axios = require('axios').default;

const Geolocation = {};

Geolocation.get = async (data) => {
    let loc = await axios.get(`http://api.positionstack.com/v1/forward?access_key=45b3abc370f45b0449a08281a31f014f&query=${data.streetNumber} ${data.Street} ${data.City} ${data.State}`);

    if (loc.data.length == 1) {
        return false;
    }

    return loc.data.data[0];
};

module.exports = Geolocation;