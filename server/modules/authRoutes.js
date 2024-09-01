const express = require("express");
const router = express.Router();
const passport = require("passport");

// Start Google authentication
router.get(
  "/",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

// Google authentication callback
router.get(
  "/google/callback",
  passport.authenticate("google", { failureRedirect: "/" }),
  (req, res) => {
    // Redirect to frontend after successful authentication
    res.redirect("http://localhost:5173/dashboard"); // Change this to your frontend URL
  }
);

// Logout route
router.get("/google/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      return next(err); // Pass any error to the next middleware
    }
  });
  res.redirect("http://localhost:5173");
});

module.exports = router;