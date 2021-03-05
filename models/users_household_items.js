'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users_household_items extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  users_household_items.init({
    userId: DataTypes.INTEGER,
    household_item_Id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'users_household_items',
  });
  return users_household_items;
};