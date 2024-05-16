const knex = require("../database/knex");

class LinkController {
    async getManyLink(request, response) {

        const user_id = request.user.id;

        const links = await knex("links").where({ user_id });

        response.status(200).json(links)
    };

    async addLink(request, response) {
        const {
            title,
            link,
            description,
        } = request.body;

        const user_id = request.user.id;

        await knex("links").insert({
            title,
            link,
            description,
            user_id
        });

        response.status(200).json()
    };

    async updateLink(request, response) {
        
        const id = request.params.idLink;

        const {
            title,
            link,
            description,
        } = request.body;

        const linkSelected = await knex("links").where({ id }).first();

        const updateLink = {
            title: title || linkSelected.title,
            link: link || linkSelected.link,
            description: description || linkSelected.description
        };
        
        await knex("links").update(updateLink).where({ id });
        
        response.status(200).json()
    }

    async deleteLink(request, response) {

        const id = request.params.idLink;

        const user_id = request.user.id;
        
        const linkDeleted = await knex("links").del().where({id, user_id});
        
        if(!linkDeleted) return response.status(404).json({ message: "Nenhuma coluna foi excluída. Id do link ou Id do user não encontrado ou não correspondente" });

        response.status(200).json();
    }

}

module.exports = LinkController;