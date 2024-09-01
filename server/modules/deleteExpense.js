const Expense = require('./ExpenseSchema');

const deleteExpense = async (req,res) => {
    try {
        const { id } = req.body;
        await Expense.findByIdAndDelete(id);
        res.status(201).json({msg: "Expense Deleted"});
    } catch(err){
        res.status(500).json({msg: "Error while deleting expense"});
        console.error(err);
    }
}

module.exports = deleteExpense;