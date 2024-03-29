'use strict';
const {
  Model, Sequelize
} = require('sequelize');

const portalAdminSettingAttributes = require('../bootstraps/portalAdminSetting')(Sequelize);

module.exports = (sequelize, DataTypes) => {
  class PortalAdminSettings extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PortalAdminSettings.init(portalAdminSettingAttributes, {
    sequelize,
    modelName: 'PortalAdminSettings',
  });
  return PortalAdminSettings;
};