const Characters = require("../data");
const { response } = require("../utils");

module.exports = async (req, res) => {
  const newCharacter = Characters.create();
  response(res, 201, newCharacter);
};
