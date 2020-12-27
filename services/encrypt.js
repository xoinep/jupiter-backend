const Cryptr = require('cryptr');
const cryptr = new Cryptr('ARandomThreeHeadedMonkeyDancing');

const encryptor = {};

encryptor.encrypt = string => cryptr.encrypt(string);

encryptor.decrypt = string => cryptr.decrypt(string);

module.exports = encryptor;
