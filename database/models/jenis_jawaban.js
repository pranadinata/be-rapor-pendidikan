'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class jenis_jawaban extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  jenis_jawaban.init({
    nama_jawaban: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'jenis_jawaban',
  });
  return jenis_jawaban;
};