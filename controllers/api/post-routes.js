const router = require('express').Router();
const { Post } = require('../../models');

router.get('/', (req, res) => {
    post.findAll({
        attributes: ['id', 'post_url', 'title', 'created_at'],
        order: [['created_at', 'DESC']]
    })
    .then(dbPostData => { res.json(dbPostData)})
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.get('/:id', (req,res) => {
    Post.findOne({
        where: {
            id: req.params.id
        },
        attributes: ['id','title',],
    })
    .then(dbPostData => { 
        if (!dbPostData) {
            res.status(404).json({ message: 'No post found with this id'});
            return;
        }
        res.json(dbPostData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err)
    });
});

router.post('/', (req, res) => {
    Post.create({
        title: req.body.title,
        description: req.body.description,
        user_id: req.session.user_id,
    })
    .then(dbPostData => { res.json(dbPostData)})
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    })});

    router.delete('/:id', (req, res) => {
        Post.destroy({
            where: {
                id: req.params.id
            },
        })
        .then((dbUserData => {  
            if (!dbUserData) {
                res.status(404).json({ message: 'No post found with this id'});
                return;
            }
            res.json(dbUserData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })});

router.put('/:id', (req, res) => {
        Post.update(
            {
                title: req.body.title,
                description: req.body.description,
            },
            {
                where: {
                    id: req.params.id
                },
            }
        )
        .then(dbPostData => {
            if (!dbPostData) {
                res.status(404).json({ message: 'No post found with this id'});
                return;
            }
            res.json(dbPostData);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });});

module.exports = router;

    