const { jwt } = require("../configs/auth");

const { secret, expiresIn } = jwt;
const { sign } = require("jsonwebtoken");

function tokenGenerator(user_id){

    const token = sign({}, secret, {
        subject : String(user_id),
        expiresIn,
    })

    return token;
}


module.exports = tokenGenerator;