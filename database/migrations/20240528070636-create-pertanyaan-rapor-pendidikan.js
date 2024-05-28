'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('pertanyaan_rapor_pendidikans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_parent: {
        type: Sequelize.INTEGER
      },
      kode_pertanyaan: {
        type: Sequelize.STRING
      },
      pertanyaan: {
        type: Sequelize.STRING
      },
      type_jawaban: {
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
    await queryInterface.dropTable('pertanyaan_rapor_pendidikans');
  }
};