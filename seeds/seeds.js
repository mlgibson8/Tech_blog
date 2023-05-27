const seedUsers = require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comments-seeds');
const sequelize = require('../config/connection');




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
