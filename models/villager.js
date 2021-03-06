'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class villager extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.villager.belongsToMany(models.user, { through: 'users_pokemons' })
    }
  };
  villager.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'villager',
  });
  return villager;
};