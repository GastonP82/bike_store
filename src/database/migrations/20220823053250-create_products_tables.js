'use strict';

const sequelize = require("sequelize");


module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:*/
     await queryInterface.createTable('products', { 
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey:true
      },
      name:{
        type: Sequelize.STRING(255),
        allowNull: true

      },
      year:{
        type: Sequelize.DATE(),
        allowNull: true
      },
      price_unit:{
        type: Sequelize.INTEGER(100),
        allowNull: true
      },
      img:{
        type: Sequelize.STRING(255),
        allowNull: false

      },
      category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model:{
            tableName: 'categories'
          },
          key: 'id_categories'
        },

      },
      color:{
        type: Sequelize.STRING(255),
        allowNull: true

      },
      description:{
        type: Sequelize.STRING(255),
        allowNull: true

      },
      discontinued:{
        type: Sequelize.STRING(255),
        allowNull: true
      }

    });
     
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:*/
  await queryInterface.dropTable('products');
    
  }
};
