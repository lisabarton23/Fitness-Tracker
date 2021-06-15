const router = require('express').Router();
// const userRoutes = require('./userRoutes');
const apiroutes = require('./apiroutes');
///api
// router.use('/users', userRoutes);
router.use('/workouts', apiroutes);

module.exports = router;
