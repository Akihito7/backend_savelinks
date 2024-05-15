const { jwt } = require("../configs/auth");
const { verify } = require("jsonwebtoken")

function ensureAuthentication(request, response, next) {
    const authHeader = request.headers.authorization;

    if (!authHeader) response.status(400).json({
        message: "Token não informado"
    });

    const [, token] = authHeader.split(" ");

    try {
        const { sub } = verify(token, jwt.secret);

        request.user = {
            id: Number(sub)
        };

        next()
    } catch (error) {
        response.status(401).json({
            message : "Token inválido"
        })
    }

};

module.exports = ensureAuthentication;