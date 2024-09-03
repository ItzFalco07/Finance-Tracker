// modules/authRoutes.js
const express = require('express');
const router = express.Router();
const passport = require('passport');

// Start Google authentication
router.get(
  '/',
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

// Google authentication callback
router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/' }),
  (req, res) => {
    // Redirect to frontend after successful authentication
    res.redirect('https://budgetbuddy09.vercel.app/dashboard');
  }
);

// Logout route
router.get('/google/logout', (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err);
    }
  });
  res.redirect('https://budgetbuddy09.vercel.app');
});

module.exports = router;
