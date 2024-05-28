'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pertanyaan_rapor_pendidikan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pertanyaan_rapor_pendidikan.init({
    id_parent: DataTypes.INTEGER,
    kode_pertanyaan: DataTypes.STRING,
    pertanyaan: DataTypes.STRING,
    type_jawaban: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pertanyaan_rapor_pendidikan',
  });
  return pertanyaan_rapor_pendidikan;
};