'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ingredients', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING(255),
        allowNull: false,
      },
      unit: {
        type: Sequelize.STRING(20),
        allowNull: false,
        validate: {
          isIn: [['kilo', 'grama', 'unidade']],
        },
      },
      cost_per_unit: {
        type: Sequelize.DECIMAL(10, 4),
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
    });

    // Adiciona a constraint CHECK manualmente (Sequelize não aplica isIn diretamente no Postgres)
    await queryInterface.sequelize.query(`
      ALTER TABLE ingredients
      ADD CONSTRAINT unit_check CHECK (unit IN ('kilo', 'grama', 'unidade'));
    `);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ingredients');
  }
};
