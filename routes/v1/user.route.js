const express = require('express');
const { getAllUser, getRandomUser } = require('../../controllers/user.controller');
const router = express.Router();

router.get('/all',getAllUser);
router.get('/:id',getRandomUser)


module.exports=router;