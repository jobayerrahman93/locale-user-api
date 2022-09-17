const express = require('express');
const { getAllUser, getRandomUser, saveUser, updateUser } = require('../../controllers/user.controller');
const router = express.Router();

router.get('/all',getAllUser);
router.get('/:id',getRandomUser);
router.post('/',saveUser);
router.patch('/:id',updateUser);


module.exports=router;