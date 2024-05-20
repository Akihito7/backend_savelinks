const knex = require("../database/knex");
const { hash, compare } = require("bcrypt");

const tokenGenerator = require("../providers/tokenGenerator");
const AppError = require("../utils/appError");


class AuthController {

    async signup(request, response) {

        let {
            name,
            email,
            password
        } = request.body;

        const emailExists = await knex("users").where({ email }).first();

        if (emailExists) throw new AppError(409, "Email já em uso");

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

        if (!user) throw new AppError(401, "Email e /ou senhas incorretos.")
        
        console.log(user)
        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) throw new AppError(401, "Email e /ou senhas incorretos.");

        const token = tokenGenerator(user.id);
        console.log(token)

        response.status(200).json({
            user,
            token
        })
    }
}

module.exports = AuthController;