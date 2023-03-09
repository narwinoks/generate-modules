'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.createTable('users',
          {
            id: {
              type:Sequelize.INTEGER,
              autoIncrement :true,
              primaryKey :true
            },
            email :{
              type: Sequelize.STRING,
              allowNull:false,
              length:100
            },
            username:{
              type: Sequelize.STRING,
              allowNull:false,
              length:50
            },
            password:{
              type:Sequelize.STRING,
              allowNull:false,
              length:255
            },
            created_at:{
              type:Sequelize.TIME,
              allowNull: false,
            },
            updated_at:{
              type :Sequelize.TIME,
              allowNull: false
            }
          });
  },

  async down (queryInterface, Sequelize) {
      await queryInterface.dropTable('users');
  }
};
