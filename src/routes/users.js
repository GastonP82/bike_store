const express = require("express");
const usersController = require ("../controllers/usersController")
const router = express.Router();





router.get('/login', usersController.login);
router.get('/list', usersController.list);

//Detalle de cada usuario

router.get('/create', usersController.createUser);
router.post('/create', usersController.storeUser);

router.get('/edit/:id', usersController.edit); 
router.post('/edit/:id', usersController.update); 

router.get('/delete/:id', usersController.delete); 
router.post('/delete/:id', usersController.delete); 

router.get('/:id', usersController.detail); 
router.post('/:id', usersController.detail); 

module.exports = router;