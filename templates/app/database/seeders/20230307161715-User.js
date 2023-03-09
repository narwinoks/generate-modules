'use strict';

/** @type {import('sequelize-cli').Migration} */
const bcrypt = require("bcrypt")
module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.bulkInsert('users', [{
          username: 'John Doe',
          email :'john@gmail.com',
          password: await bcrypt.hash("password", 10),
          created_at: new Date(),
          updated_at: new Date(),

      }], {});
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('users', null, {});
  }
};
