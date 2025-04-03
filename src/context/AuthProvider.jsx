 /*  import React, { createContext, useEffect, useState } from "react";
import { getlocalStorage, setlocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        setlocalStorage(); // Initialize storage if empty
        const storedData = JSON.parse(localStorage.getItem("employees")); 
        if (storedData) {
            setUserData(storedData);  // ✅ Load stored employee data
        }
    }, []);

    return (
        <AuthContext.Provider value={[userData, setUserData]}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;*/


import React, { createContext, useEffect, useState } from "react";
import { getlocalStorage, setlocalStorage } from "../utils/localStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        setlocalStorage(); // Initialize localStorage if empty
        const storedData = JSON.parse(localStorage.getItem("employees"));
        console.log("Loading data from localStorage...", storedData); // Debugging
        if (storedData) {
            setUserData(storedData);
        }
    }, []);

    return (
        <AuthContext.Provider value={[userData, setUserData]}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

