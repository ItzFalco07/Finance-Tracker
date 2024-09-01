import React, { useEffect, useState } from "react";
import axios from 'axios'
import Nav from "../components/Nav";
import NavDone from "../components/NavDone";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import Features from "../components/Features";

const Home = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("https://budgetbuddy-cplc.onrender.com/getuser", {
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
      <Nav />
      <Hero />
      <Features />
      <Footer />
    </>
  );
};

export default Home;
