class LinkController {
    async getManyLink(request, response) {
        response.status(200).json("many links")
    }
}

module.exports = LinkController;