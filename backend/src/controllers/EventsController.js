const connection = require('../database/connection');


module.exports = {
    async index(request, response){
        
        return response.json(incidents)
    },
    async create(request,response) {
        
        return response.json({ id });
    },
    async delete(request,response) {

        return response.status(204).send();

    }
}