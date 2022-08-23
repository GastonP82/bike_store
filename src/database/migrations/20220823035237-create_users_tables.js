'use strict';

const sequelize = require("sequelize");

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:*/
     await queryInterface.createTable('users', { 
      id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey:true
      },
      first_name:{
        type: Sequelize.STRING(255),
        allowNull: true

      },
      last_name:{
        type: Sequelize.STRING(255),
        allowNull: true
      },
      address:{
        type: Sequelize.STRING(255),
        allowNull: true
      },
      city:{
        type: Sequelize.STRING(255),
        allowNull: false

      },
      country:{
        type: Sequelize.STRING(255),
        allowNull: false

      },
      email:{
        type: Sequelize.STRING(255),
        allowNull: true

      },
      username:{
        type: Sequelize.STRING(255),
        allowNull: true

      },
      password:{
        type: Sequelize.STRING(255),
        allowNull: true
      },
      user_type:{
        type: Sequelize.STRING(255),
        allowNull: true
      },
      avatar:{
        type: Sequelize.STRING(255),
        allowNull: false

      },

    
    });
     
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:*/
  await queryInterface.dropTable('users');
    
  }
};
