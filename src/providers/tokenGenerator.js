const { jwt } = require("../configs/auth");

const { secret } = jwt;
const { sign } = require("jsonwebtoken");

function tokenGenerator(user_id){

    const token = sign({}, secret, {
        subject : String(user_id),
        expiresIn : "1d",
    })

    return token;
}


module.exports = tokenGenerator;