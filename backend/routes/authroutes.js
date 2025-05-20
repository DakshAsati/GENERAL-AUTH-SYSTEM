const express = require('express');
const router = express.Router();
const { register, login } = require('../controllers/authcontroller');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/register', register);
router.post('/login', login);
router.get('/protected', authMiddleware, (req, res) => {
  res.json({ message: 'Protected content', user: req.user });
});

module.exports = router;
