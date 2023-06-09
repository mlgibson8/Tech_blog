const router = require('express').Router();
const { Post, User, Comment } = require('../models');

// In this path, the main.handlebars template renders always and inside the {{{body}}} section....
// We render the homepage.handlebars template
router.get('/', (req, res) => {
  Post.findAll({
    attributes: ['id', 'title', 'description', 'created_at', 'user_id'],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username'],
        },
      },
      {
        model: User,
        attributes: ['username'],
      },
    ],
  })
    .then((dbPostData) => {
      // Serialize the data, essentially making it an easier object to iterate through
      const posts = dbPostData.map((post) => post.get({ plain: true }));
     // reverse the order of the posts array so that the most recent post is first
      posts.reverse();
      // Render the homepage template and include the posts object we just declared
      res.render('homepage', {
        posts,
        loggedIn: req.session.loggedIn,
        username: req.session.username,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Renders a single post by id
router.get('/post/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id, // params == endpoint url data
    },
    attributes: ['id', 'title', 'created_at', 'user_id', 'description'],
    include: [
      {
        model: Comment,
        attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
        include: {
          model: User,
          attributes: ['username'],
        },
      },
      {
        model: User,
        attributes: ['username'],
      },
    ],
  })
  // If the post is found, we serialize the data and render the single-post template
    .then((dbPostData) => {
      const title = dbPostData.dataValues.title;
      const user = dbPostData.dataValues.user.username;
      const date = dbPostData.dataValues.created_at;
      const description = dbPostData.dataValues.description;
      const post = {
        title,
        date,
        user,
        description,
        comments: [],
      };
      // set up a loop to iterate through each comment and push it to the comments array
      for (let i = 0; i < dbPostData.dataValues.comments.length; i++) {
        let username = dbPostData.dataValues.comments[i].user.username;
        let commentText = dbPostData.dataValues.comments[i].comment_text;
        let commentDate =
          dbPostData.dataValues.comments[i].dataValues.created_at;
        let user_id = dbPostData.dataValues.comments[i].dataValues.user_id;
        let comment_id = dbPostData.dataValues.comments[i].dataValues.id;
        post.comments.push({
          user: username,
          userId: user_id,
          text: commentText,
          date: commentDate,
          commentId: comment_id,
          // Check the username of the session
          usersComment: username == req.session.username,
        });
      }
// render the single-post in handlebars
      res.render('single-post', {
        post,
        loggedIn: req.session.loggedIn,
        username: req.session.username,
      });
    })
    // If the post is not found, we throw an error
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
