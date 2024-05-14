const knex = require("../database/knex");

class AuthController {

    async signup(request, response) {
        const users = await knex("users");
        response.status(200).json(users)
    }

    async signln(request, response) {
        response.status(200).json("sucess")
    }
}

module.exports = AuthController;