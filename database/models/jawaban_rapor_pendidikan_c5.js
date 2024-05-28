'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class jawaban_rapor_pendidikan_c5 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  jawaban_rapor_pendidikan_c5.init({
    id_responden: DataTypes.INTEGER,
    tahun: DataTypes.INTEGER,
    skor: DataTypes.DOUBLE
  }, {
    sequelize,
    modelName: 'jawaban_rapor_pendidikan_c5',
  });
  return jawaban_rapor_pendidikan_c5;
};