const { Base, Extra, Favorite } = require("../util/models");
const { Sequelize } = require("sequelize");

module.exports = {
  getOptions: async (req, res) => {
    let bases = await Base.findAll();
    let extras = await Extra.findAll();
    res.status(200).send({ bases, extras });
  },

  getFavorites: async (req, res) => {
    let favorites = await Favorite.findAll({
      attributes: [
        "name",
        "base.name",
        [Sequelize.fn("array_agg", Sequelize.col('"extra"."name"')), "extras"],
      ],
      group: ["favorite.name", "base.id"],
      include: [
        {
          model: Extra,
          attributes: [],
        },
        {
          model: Base,
          attributes: ["name"],
        },
      ],
    });

    res.status(200).send(favorites);
  },
};
