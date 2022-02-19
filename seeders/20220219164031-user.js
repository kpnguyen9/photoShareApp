"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: "Annie",
          lastName: "Easley",
          email: "ajeasley@nasa.gov",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          firstName: "John",
          lastName: "Smith",
          email: "jsmith@google.com",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
