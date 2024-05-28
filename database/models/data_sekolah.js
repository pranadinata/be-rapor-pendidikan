'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class data_sekolah extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  data_sekolah.init({
    id_responden: DataTypes.INTEGER,
    cabang_dinas_pendidikan: DataTypes.STRING,
    nama_sekolah: DataTypes.STRING,
    status: DataTypes.STRING,
    kabupaten_kota: DataTypes.STRING,
    kecamatan: DataTypes.STRING,
    akreditasi: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'data_sekolah',
  });
  return data_sekolah;
};