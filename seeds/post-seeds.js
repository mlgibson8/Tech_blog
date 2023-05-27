const { Post} = require('../models');

const postData = [
    {
        title: 'Test Post 1',
        description: 'This is a test post',
        user_id: 1,
    },
    {
        title: 'Test Post 2',
        description: 'This is a test post',
        user_id: 2,
    },
    {
        title: 'Test Post 3',
        description: 'This is a test post',
        user_id: 3,
    },
    {
        title: 'Test Post 4',
        description: 'This is a test post',
        user_id: 4,
    },
    {
        title: 'Test Post 5',
        description: 'This is a test post',
        user_id: 1,
    },
    {
        title: 'Test Post 6',
        description: 'This is a test post',
        user_id: 2,
    },
];

const seedPosts = () => Post.bulkCreate(postData);
module.exports = seedPosts;