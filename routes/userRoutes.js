const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const userController = require('../controllers/userControllers');
const { getAllUsers, getSingleUser, register, login, updateUser , deleteUser} = userController
router.get('/', getAllUsers);
router.get('/getsingle/:id', getSingleUser);
router.post('/register', register);
router.post('/login', login);
router.put('/update/:id', updateUser);
router.delete('/delete/:id', deleteUser);

module.exports = router;
