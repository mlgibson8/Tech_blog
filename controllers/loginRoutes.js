const router = require('express').Router();
router.get('/', (req, res) => {
    res.render('login');
});

module.exports = router;