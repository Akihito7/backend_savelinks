class AuthController {

    async signup(request, response) {
        response.status(200).json("sucess")
    }

    async signln(request, response) {
        response.status(200).json("sucess")
    }
}

module.exports = AuthController;