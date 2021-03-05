'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class household_item extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.household_item.belongsToMany(models.user, { through: 'users_household_items' })
    }
  };
  household_item.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'household_item',
  });
  return household_item;
};