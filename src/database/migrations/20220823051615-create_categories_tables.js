'use strict';

const sequelize = require("sequelize");


module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:*/
     await queryInterface.createTable('categories', { 
      id_categories: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey:true
      },
      description:{
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
  await queryInterface.dropTable('categories');
    
  }
};

