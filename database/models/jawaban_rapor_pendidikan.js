'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class jawaban_rapor_pendidikan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  jawaban_rapor_pendidikan.init({
    id_responden: DataTypes.INTEGER,
    C1: DataTypes.BOOLEAN,
    C2: DataTypes.INTEGER,
    C3: DataTypes.INTEGER,
    C4: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'jawaban_rapor_pendidikan',
  });
  return jawaban_rapor_pendidikan;
};