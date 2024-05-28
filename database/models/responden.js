'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class responden extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  responden.init({
    nama_lengkap: DataTypes.STRING,
    jabatan: DataTypes.INTEGER,
    nomor_kontak: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'responden',
  });
  return responden;
};