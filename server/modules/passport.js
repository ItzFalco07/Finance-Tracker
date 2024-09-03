// modules/passport.js
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('./UserSchema'); // Adjust path as necessary

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "/auth/google/callback"
},
async (accessToken, refreshToken, profile, done) => {
    try {
        // Check if user already exists in our db
        let user = await User.findOne({ googleId: profile.id });

        if (user) {
            // If user exists, return the user
            done(null, user);
        } else {
            // If user doesn't exist, create a new user in our db
            user = await new User({
                googleId: profile.id,
                name: profile.displayName,
                email: profile.emails[0].value
            }).save();

            done(null, user);
        }
    } catch (error) {
        console.error(error);
        done(error, null);
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.id); // Serialize the user id to the session
});

passport.deserializeUser(async (id, done) => {
    try {
        const user = await User.findById(id);
        done(null, user); // Deserialize the user object from the session
    } catch (error) {
        done(error, null);
    }
});
