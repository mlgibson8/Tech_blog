const { User } = require('../models');
const userdata = [
    {
        username:'youngGib',
        email:'skrilla@gmail.com',
        password:'pword123',
    },
    {
        username:'BigL',
        email:'hoop4lyfe@hotmail.com',
        password:'gibisthebest',
    },
    {
        username:'testuser3',
        email:'tester3@gmail.com',
        password:'password123',
    },
    {
        username:'slimdrizzy',
        email:'bigntough@outlook.com',
        password:'gravytrain',
    },
    {
        username:'seanpaul',
        email:'temp@hotmail.com',
        password:'nadawg123',
    },
    {
        username:'link',
        email:'zeldawhere@gmail.com',
        password:'pword123',
    },

];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});
module.exports = seedUsers;