

import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthProvider";

const Header = (props) => {
    const [userData] = useContext(AuthContext);
    
    const loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));

    console.log("📢 Header - Received userData:", userData);
    console.log("📢 Header - Logged-in user:", loggedInUser);

    return (
        <div className="flex justify-between items-center">
            <h1 className="text-2xl font-medium">
                Hello, <br />
                <span className="text-3xl font-semibold">
                    {loggedInUser?.data?.firstName || "Admin"} 🙏
                </span>
            </h1>
            <button
                onClick={() => {
                    localStorage.removeItem("loggedInUser");
                    props.changeUser("");
                }}
                className="bg-red-600 text-white px-5 h-8 rounded text-lg font-medium mt-8"
            >
                Log Out
            </button>
        </div>
    );
};

export default Header;
