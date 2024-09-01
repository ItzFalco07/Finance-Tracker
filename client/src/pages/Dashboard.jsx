import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import axios from "axios";
import NavDone from "../components/NavDone";
import Signup from '../components/Signup'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Grid from '../components/Grid'
import BalanceDisplay from '../components/BalanceDisplay'

const Dashboard = () => {
  const [user, setUser] = useState(null);
  const [model, setModel] = useState(0);
  const [showMessage, setShowMessage] = useState(false);
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [type, setType] = useState("");
  const [Response, setResponse] = useState([])
  const [Balance, setBalance] = useState(0)

    const fetchExpenses = async () => {
      try {
        const res = await axios.get('http://localhost:5000/get-expense', { withCredentials: true });
        var expenses = res.data.Allexpense
        setResponse( expenses || []);
          const totalBalance = expenses.reduce((acc, expense) => {
            return expense.type === 'Income' ? acc + Number(expense.amount) : acc - Number(expense.amount);
          }, 0);
        
            setBalance(totalBalance);
          
      } catch (error) {
        console.error("Error fetching expenses:", error);
      }
    };
    fetchExpenses();
  

  const handleExpense = async () => {
    if (name.length == 0 || amount.toString().length == 0 || type == 0) {
      toast.error('Inputs cant be empty')
      return
    } else if (isNaN(amount)) {
      toast.error('Amount must be a Number');
      return
    } else {
      try {
        const response = await axios.post("http://localhost:5000/add-expense", {
          name,
          amount,
          type
        }, { withCredentials: true }); // Include credentials (cookies)

        console.log(response);
        toast.success("Expense added successfully!");
        fetchExpenses();
        setName("");
        setAmount("");
        setType("");
        setModel(0);
      } catch (error) {
        toast.error("Error adding expense.");
        console.error("Error adding expense:", error);
      }
    }

  };

  useEffect(() => {
    if (!user) {
      const timer = setTimeout(() => {
        setShowMessage(true);
      }, 4000);

      return () => clearTimeout(timer); // Clean up the timeout on component unmount
    }
  }, [user]);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:5000/getuser", {
          withCredentials: true,
        });
        setUser(response.data.user); // Assuming response contains a 'user' object
      } catch (err) {
        console.error("Error fetching user:", err);
      }
    };
    fetchUser();
  }, []);

  return (
    <>
      {user ? (
        <>
          <NavDone userUrl={user.profileUrl} />
          <div className="Dashboard">
            <div className="center">
              <h1>Hello {user.username} 👋</h1>
              <p id="break">Welcome to BudgetBro, Your finance management system.</p>
            </div>

            <div id="input" className="center mt">
              <button type="button" onClick={() => setModel(1)} className="button btn btn-primary">
                Add Expense
              </button>
            </div>
          </div>

          {model === 1 && (
            <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Enter Expense</h5>
                    <button type="button" className="close" data-dismiss="modal" onClick={() => setModel(0)}>
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <div className="flex">
                      <label htmlFor="name">Enter Name</label>
                      <input value={name} onChange={(e) => setName(e.target.value)} id="name" type="text" placeholder="e.g. Salary from company" />
                    </div>

                    <div className="flex mt">
                      <label htmlFor="amount">Enter Amount</label>
                      <input value={amount} onChange={(e) => setAmount(e.target.value)} id="amount" type="text" placeholder="Amount" />
                    </div>

                    <select id="options" value={type} onChange={(e) => setType(e.target.value)}>
                      <option value="">Select Type</option>
                      <option value="Income">Income</option>
                      <option value="Expense">Expense</option>
                    </select>
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" onClick={() => setModel(0)}>Close</button>
                    <button type="button" className="btn btn-primary" onClick={handleExpense}>Add Expense</button>
                  </div>
                </div>
              </div>
            </div>
          )}

          <ToastContainer />


          {Response.map(expense =>
            <Grid key={expense._id} id={expense._id} name={expense.name} amount={expense.amount} type={expense.type} />
          )}
          
          <BalanceDisplay balance={Balance} />

        </>
      ) : (
        <div className="d-flex justify-content-center align-items-center" style={{ height: "70vh" }}>
          <span className="spinner-border spinner-border-lg" aria-hidden="true"></span>
          {showMessage && <Signup />}
        </div>
      )}

      <Footer />
    </>
  );
};

export default Dashboard;
