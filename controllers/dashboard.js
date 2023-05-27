const router = require('express').Router();
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    Post.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: ['id', 'title', 'created_at', 'user_id', 'description'],
        include: [
            {
                model: Comment,
                attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                include: {
                    model: User,
                    attributes: ['username'],
                },},],})
        .then(dbPostData => {
            const post = [];
            if(dbPostData.length == 1){
                const title = dbPostData[0].dataValues.title;
                const description = dbPostData[0].dataValues.description;
                const date = dbPostData[0].dataValues.created_at;
                const postId = dbPostData[0].dataValues.id;
                Post.push({title, description, date, postId});
            } else {
                dbPostData.forEach(post => {
                    const title = post.dataValues.title;
                    const description = post.dataValues.description;
                    const date = post.dataValues.created_at;
                    const postId = post.dataValues.id;
                    Post.push({title, description, date, postId});
                });
            }
            post.reverse();
            res.render('dashboard', {post, loggedIn: req.session.loggedIn, username: req.session.username});
         })
           .catch(err => {
                console.log(err);
                res.status(500).json(err);
            });
});
            
            module.exports = router;