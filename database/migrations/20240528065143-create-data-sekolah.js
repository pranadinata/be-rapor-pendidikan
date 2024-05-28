'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('data_sekolahs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_responden: {
        type: Sequelize.INTEGER
      },
      cabang_dinas_pendidikan: {
        type: Sequelize.STRING
      },
      nama_sekolah: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      },
      kabupaten_kota: {
        type: Sequelize.STRING
      },
      kecamatan: {
        type: Sequelize.STRING
      },
      akreditasi: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('data_sekolahs');
  }
};