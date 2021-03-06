const express = require('express');
const router = express.Router();
let Exercise = require('../models/excercise.model');




// HOME PAGE SHOW
router.route('/').get((req, res, next) => {
    Exercise.find()
        .then(exercise => { res.json(exercise) })
        .catch(err => { res.status(400).json("Error: " + err) });
});




// ADD DATA TO THE DATABASE
router.route('/add').post((req, res, next) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newExercise = new Exercise({ username, description, duration, date });
    newExercise.save()
        .then(() => res.json("exercise added"))
        .catch(err => { res.status(400).json("Error: " + err) });
});




// SHOW SPECEFIC ITEM
router.route('/:id').get((req, res, next) => {
    Exercise.findById(req.params.id)
        .then(exercise => { res.json(exercise) })
        .catch(err => { res.status(400).json("Error: " + err) });
});




// DELETE A SPECEFIC ITEM
router.route('/:id').delete((req, res, next) => {
    Exercise.findByIdAndDelete(req.params.id)
        .then(() => { res.json("exercise deleted") })
        .catch(err => { res.status(400).json("Error: " + err) });
});




// UPDATE A SPECEFIC ITEM
router.route('/update/:id').post((req, res, next) => {
    Exercise.findById(req.params.id)
        .then((exercise) => {
            exercise.username = req.body.username;
            exercise.description = req.body.description;
            exercise.duration = Number(req.body.duration);
            exercise.date = Date.parse(req.body.date);

            exercise.save()
                .then(() => res.json('Exercise updated'))
                .catch(err => { res.status(400).json("Error: " + err) });
        })
        .catch(err => { res.status(400).json("Error: " + err) });
})


module.exports = router;