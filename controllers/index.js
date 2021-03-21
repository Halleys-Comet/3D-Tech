const router = require('express').Router();
const bcrypt = require('bcrypt');


const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');


router.use('/api', apiRoutes);
router.use('/', homeRoutes);

router.use((req, res) => {
    res.status(404).end();
});

module.exports = router;