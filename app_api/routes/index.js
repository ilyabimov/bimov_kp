var express = require('express');
var router = express.Router();
let ctrlservices = require('../controllers/services');
let ctrlAuth = require('../controllers/auth');

router.get('/services', ctrlservices.getAll);
router.get('/services/:id', ctrlservices.getOne);
router.post('/services', ctrlservices.create);
router.put('/services/:id', ctrlservices.update);
router.delete('/services/:id', ctrlservices.delete);

router.post('/signup', ctrlAuth.signup);
router.post('/login', ctrlAuth.login);
router.get('/logout/:login', ctrlAuth.logout);
router.delete('/selfremove/:login', ctrlAuth.selfremove);

module.exports = router;