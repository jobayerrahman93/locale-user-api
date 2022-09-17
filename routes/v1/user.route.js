const express = require('express');
const { getAllUser, getRandomUser, saveUser } = require('../../controllers/user.controller');
const router = express.Router();

router.get('/all',getAllUser);
router.get('/:id',getRandomUser);
router.post('/',saveUser)


module.exports=router;