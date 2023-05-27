const sequelize = require('../config/connection');
const { User } = require('../models');

const userData = require('./userData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  console.log('Database synced');
  await seedUsers();
  console.log('Users seeded');
  await seedPosts();
  console.log('Posts seeded');
  await seedComments();
  console.log('Comments seeded');
  process.exit(0);
}


seedDatabase();
