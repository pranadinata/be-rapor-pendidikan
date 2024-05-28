'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('jawaban_rapor_pendidikans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      id_responden: {
        type: Sequelize.INTEGER
      },
      C1: {
        type: Sequelize.BOOLEAN
      },
      C2: {
        type: Sequelize.INTEGER
      },
      C3: {
        type: Sequelize.INTEGER
      },
      C4: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('jawaban_rapor_pendidikans');
  }
};