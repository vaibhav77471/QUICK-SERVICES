


import React, { useState, useEffect } from "react"; 
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import LoginForm from "./components/login";
import Home from "./components/Home";
import Userlist from "./components/userlist";
import SaveServiceComponent from "./components/saveservices";
import CategoryDetails from "./components/CategoryDetails";
import Profile from "./components/profile";
import Preloader from "./components/Preloader";
import { useSelector } from "react-redux";
import Dashboard from "./components/dashboard";
import Category from "./components/Category";
import Cart from "./components/Cart";
import Myorder from "./components/Myorder";

function App() {
  const [showPreloader, setShowPreloader] = useState(true); // State for the preloader

  const login = useSelector((state) => state.islogin.value);

  // const setUserLoginStatus = useSelector((state)=> state.isuserlogin.value)

  useEffect(() => {
    // Hide preloader after 2 seconds
    const preloaderTimeout = setTimeout(() => {
      setShowPreloader(false);
    }, 2000);

    return () => {
      clearTimeout(preloaderTimeout);
    };
  }, []);

  return (
    <>
      {showPreloader ? (
        <Preloader />
      ) : (
        <>
          <Navbar />
          <Routes>
            {/* Routes for when user is logged in */}
            {login === true ? (
              <>
                {/* Dashboard route */}
                <Route path="/dashboard" element={<Dashboard />} />

                {/* Category details route */}
                <Route path="/category/:id" element={<CategoryDetails />} />

                 {/* Category route */}
                 <Route path="/Category" element={<Category />} />

                {/* Home route */}
                <Route path="/Home" element={<Home />} />

                {/* Userlist route */}
                <Route path="/Userlist" element={<Userlist />} />

                {/* UserProfile route */}
                <Route path="/userprofile" element={<Profile />} />

                {/* SaveServiceComponent route */}
                <Route path="/saveservices" element={<SaveServiceComponent />} />

                {/* cart route */}
                <Route path="/cart" element={<Cart />} />

                {/* myorder route */}
                <Route path="/myorder" element={<Myorder/>} />


              </>
            ) : (
              // Routes for when user is not logged in
              <>
                {/* LoginForm route */}
                <Route path="/" element={<LoginForm />} />

              </>
            )}
          </Routes>
        </>
      )}
    </>
  );
}

export default App;
