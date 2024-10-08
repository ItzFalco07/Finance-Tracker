const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const cors = require('cors');
const Expense = require('./modules/ExpenseSchema')
require('dotenv').config();
require('./modules/passport'); // Ensure the path is correct
const authRoutes = require('./modules/authRoutes');
const MongoStore = require('connect-mongo'); 
const deleteExpense = require('./modules/deleteExpense');
const User = require('./modules/userSchema'); // Adjust path as necessary
const userRoutes = require('./modules/userRoutes'); // Add this line

const app = express();
const port = process.env.PORT || 5000;
const uri = process.env.MONGO_URI;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({
    origin: ['https://budgetbuddy09.vercel.app'], // your frontend URL
    credentials: true, // Allow credentials (cookies)
  }));

// Connect to MongoDB
async function connectDB() {
    try {
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('DB connected!');
    } catch (error) {
        console.error(`Error while connecting to DB: ${error}`);
    }
}
connectDB();

// App setup
app.use(session({
    secret: process.env.COOKIE_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 10 * 365 * 24 * 60 * 60 * 1000, // 10 years
        secure: true, // Secure cookies in production
        httpOnly: true, // Prevent access via JavaScript
        sameSite: 'none', // Allows cross-origin requests
    },
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URI,
        collectionName: 'sessions'
    })
}));
// Initialize Passport
app.use(passport.initialize());
app.use(passport.session());


// Routes
app.use('/auth', authRoutes);

//send data 
app.get('/getuser', (req, res)=>{
    if(req.isAuthenticated()) {
        res.json({
            user: req.user
        }) 
    } else {
        res.status(401).json({ message: 'Not authenticated' });
    }
});

// expense routes
app.post('/add-expense', async (req,res) => {
    if(req.isAuthenticated()) {
        const {name, amount, type} = req.body;
        const userName = req.user.username
        const expense = new Expense({name, amount, type, user: userName});
        await expense.save();
        res.status(201).json({msg: "expense created successfully"})
    } else {
        res.status(500).json({ message: 'Not authenticated' });
    }
})

app.get('/get-expense', async (req,res)=>{
    if(req.isAuthenticated()) {
        const userName = req.user.username;
        const expenses = await Expense.find({user: userName});
        res.json({Allexpense: expenses})
    } else {
        res.status(401).json({ message: 'Not authenticated' });
    }
})

app.post('/delete-expense', deleteExpense);
app.use('/user', userRoutes); // Add this line

app.get('/', (req, res) => {
    res.send('Backend server');
});

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}...`);
});
