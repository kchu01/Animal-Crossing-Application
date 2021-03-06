'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users_villager extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  users_villager.init({
    userId: DataTypes.INTEGER,
    villagerId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'users_villager',
  });
  return users_villager;
};