const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const checkAuth = require('../middleware/check-auth')

const Problem = require('../models/problem');
const User = require('../models/user');

router.get('/', checkAuth, (req, res, next) => {
    Problem.find()
        .select("_id name link notes solution")
        .exec()
        .then(docs => {
            const response = {
                count: docs.length,
                problems: docs
            }
            res.status(200).json(response);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            })
        })
})

router.get("/:problemId", checkAuth, (req, res, next) => {
    const id = req.params.problemId;
    Problem.findById(id)
        .exec()
        .then(doc => {
            console.log(doc);
            if (doc) {
                res.status(200).json(doc);
            } else {
                res.status(404).json({
                    message: "No valid entry found for provided ID"
                })
            }
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
})

router.post('/', checkAuth, (req, res, next) => {
    const problem = new Problem({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        link: req.body.link,
        notes: req.body.notes,
        solution: req.body.solution
    });
    console.log(problem);
    problem
        .save()
        .then(result => {
            console.log(result);
            User.findOne({ _id: req.userData.userId }, (err, user) => {
                if (user) {
                    user.todo.push(problem);
                    user.save();
                    res.status(201).json({
                        message: 'Problem saved successfully',
                        createdProblem: result
                    })
                } else {
                    Problem.remove({ _id: problem._id });
                    res.status(500).json({ error: err });
                }
            })
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        });
})

router.patch("/:problemId", checkAuth, (req, res, next) => {
    const id = req.params.problemId;
    Problem.update({ _id: id }, { $set: req.body })
        .exec()
        .then(result => {
            console.log(result);
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ error: err });
        })
})

router.delete("/:problemId", checkAuth, (req, res, next) => {
    const id = req.params.problemId;
    Problem.remove({ _id: id })
        .exec()
        .then(result => {
            console.log(res);
            res.status(200).json(result)
        })
        .catch(err => {
            console.log(res);
            res.status(500).json({ error: err });
        })
})

module.exports = router;