const express = require('express');
const { getAllUser, getRandomUser, saveUser, updateUser, deleteUser, getSpecificUser } = require('../../controllers/user.controller');
const router = express.Router();

router.get('/all',getAllUser);
router.get('/random',getRandomUser);
router.get('/:id',getSpecificUser);
router.post('/',saveUser);
router.patch('/:id',updateUser);
router.delete('/:id',deleteUser);


module.exports=router;