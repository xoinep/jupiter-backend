const SumoLogger = require('sumo-logger');

let opts = {
  endpoint:
    'https://endpoint6.collection.us2.sumologic.com/receiver/v1/http/ZaVnC4dhaV2rie5crO5j2cSv5SF_HR_FxRg_xWnTD9TmajQo-vIqv0D1kyoZV7FmBONrt31UY37xZ7qwHYVYYoB_tphZrRAv_gzH7hwoijJRnMQpmdTUYQ==',
  soureName: 'poseidon-backend',
};

const sumoLogger = new SumoLogger(opts);

module.exports = sumoLogger;
