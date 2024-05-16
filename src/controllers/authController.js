const knex = require("../database/knex");
const { hash, compare } = require("bcrypt");

const tokenGenerator = require("../providers/tokenGenerator");

class AuthController {

    async signup(request, response) {

        let {
            name,
            email,
            password
        } = request.body;

        const emailExists = await knex("users").where({ email }).first();

        if (emailExists) return response.status(409).json({
            message: "Email já em uso."
        });

        password = await hash(password, 8);

        await knex("users").insert({
            name,
            email,
            password
        });

        response.status(200).json()
    }

    async signln(request, response) {
        const {
            email,
            password
        } = request.body;

        const user = await knex("users").where({ email }).first();

        if (!user) return response.status(400).json({
            message: "Email e /ou senha incorretos."
        });

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) return response.status(400).json({
            message: "Email e /ou senhas incorretos."
        });

        const token = tokenGenerator(user.id);

        response.status(200).json({
            user,
            token
        })
    }
}

module.exports = AuthController;