const express = require('express');
const { getAllUser, getRandomUser, saveUser, updateUser, deleteUser } = require('../../controllers/user.controller');
const router = express.Router();

router.get('/all',getAllUser);
router.get('/:id',getRandomUser);
router.post('/',saveUser);
router.patch('/:id',updateUser);
router.delete('/:id',deleteUser);


module.exports=router;