const { Comment } = require('../models');

const commentdata = [
    {
        comment_text: 'This is a test comment',
        user_id: 1,
        post_id: 1,
    },
    {
        comment_text: 'This is a 2nd test comment',
        user_id: 2,
        post_id: 1,
    },
    {
        comment_text: 'This is a 3rd test comment',
        user_id: 3,
        post_id: 1,
    },
    {
        comment_text: 'This is a 4th test comment',
        user_id: 1,
        post_id: 2,
    },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;