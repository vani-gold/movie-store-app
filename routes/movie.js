const router = require("express").Router();
const verify = require('./verifyToken');

router.get('/', verify, (req, res) => {
    // res.send(req.user);
    res.json({
        movie: {
            title: 'my first movie',
            description: 'You can not access this movie route if you are not login'

        }
        
    });
});

module.exports = router;
