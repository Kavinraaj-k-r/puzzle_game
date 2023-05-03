const express = require('express');

const router = express.Router();

const adminController = require('../controller/admin');
const authMiddleware = require('../controller/authMiddleware');

router.get("/dashboard", authMiddleware.isAdmin, adminController.getDashBoard);

module.exports = router;