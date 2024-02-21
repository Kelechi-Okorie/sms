const express = require('express');

const {createNewUser} = require('../../../controllers/user');

const router = express.Router();

// userRouter.route().get('/', async (req, res) => {
//     res.send('this is coming from the user route file');
// });

// router.use((req, res, next) => {
//     console.log('Time', Date.now());
//     next()
// });

router.post('/new', createNewUser)

module.exports = router;