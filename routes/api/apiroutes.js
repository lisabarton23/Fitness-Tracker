const router = require('express').Router();
  const  Workout  = require('../../models/workout');

//api/workouts/ I need workouts/range and workouts/ 
router.get('/range', (req, res) => {
  //range 7 datasets
  //sort by date for most recent
  Workout.find({})
  .sort({ day: 1 })
  .then(workoutObj => {
    res.json(workoutObj);
  })
  .catch(err => {
    res.status(400).json(err);
  });
  });
  
  router.get('/', (req, res) => {
    //range 7 datasets
    //sort by date for most recent
    Workout.find({})
    .sort({ day: 1 })
    .then(workoutObj => {
      res.json(workoutObj);
    })
    .catch(err => {
      res.status(400).json(err);
    });
    });
    
    router.post("/", ({ body }, res) => {
      Workout.insertMany(body)
        .then(workoutObj => {
          res.json(workoutObj);
        })
        .catch(err => {
          res.status(400).json(err);
        });
    });
// router.delete('/:id', withAuth, async (req, res) => {
//   try {
//     const projectData = await Project.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!projectData) {
//       res.status(404).json({ message: 'No project found with this id!' });
//       return;
//     }

//     res.status(200).json(projectData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
