const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
        min: 0,
    },
    type: {
        type: String,
        required: true,
    },
    user: {
        type: String,
    }
}, {timestamps: true})


module.exports = mongoose.model('Expense', ExpenseSchema)