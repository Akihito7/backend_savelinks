const secretKey = "xama44";
const expiresIn = "1d";

const { sign } = require("jsonwebtoken")

function tokenGenerator(user_id){

    const token = sign({}, secretKey, {
        subject : String(user_id),
        expiresIn,
    })

    return token;
}


module.exports = tokenGenerator;