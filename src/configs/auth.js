module.exports = {
    jwt: {
        secret: process.env.SECRETKEY,
        expiresIn: process.env.EXPIRESIN
    }
}