'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class upload_file extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  upload_file.init({
    id_responden: DataTypes.INTEGER,
    nama_file: DataTypes.STRING,
    renamed_file: DataTypes.STRING,
    type_file: DataTypes.STRING,
    path: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'upload_file',
  });
  return upload_file;
};