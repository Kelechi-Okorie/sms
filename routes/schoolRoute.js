const express = require('express');

const {index, getById, newSchool} = require('../controllers/school');

const router = express.Router();

// userRouter.route().get('/', async (req, res) => {
//     res.send('this is coming from the user route file');
// });

// router.use((req, res, next) => {
//     console.log('Time', Date.now());
//     next()
// });

router.get('/', index);
router.get('/:id', getById);
router.get('/new', newSchool)

module.exports = router;