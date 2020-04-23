const connection = require('../database/connection');
const generateUniqueId = require('../utils/generateUniqueId')

module.exports = {
    async index(request, response) {

        return response.json(ongs);
    },
    
    async create(request, response) {

    return response.json({ id });
    }
}