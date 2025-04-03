

import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const CreateTask = () => {
    const [userData, setUserData] = useContext(AuthContext);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [assignTo, setAssignTo] = useState('');
    const [category, setCategory] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();

        const newTask = {
            title,
            description,
            date,
            category,
            active: false,
            new_task: true,
            failed: false,
            completed: false
        };

        // ✅ Correctly update userData
        const updatedUserData = userData.map(user => {
            if (user.firstName === assignTo) {
                return {
                    ...user,
                    tasks: [...user.tasks, newTask],
                    task_count: {
                        ...user.task_count,
                        new_task: (user.task_count.new_task || 0) + 1 // ✅ Ensure it updates correctly
                    }
                };
            }
            return user;
        });

        setUserData(updatedUserData);
        localStorage.setItem("employees", JSON.stringify(updatedUserData)); // ✅ Save to localStorage

        console.log("Updated User Data:", updatedUserData); // ✅ Debugging
        console.log("Stored in LocalStorage:", JSON.parse(localStorage.getItem("employees"))); // ✅ Debugging

        setTitle('');
        setCategory('');
        setAssignTo('');
        setDate('');
        setDescription('');
    };

    return (
        <div className="p-5 bg-[#1c1c1c] mt-7 rounded">
            <form onSubmit={submitHandler} className="flex flex-wrap w-full item-start justify-between">
                <div className="w-1/2">
                    <div>
                        <h3 className="text-sm text-gray-300 mb-0.5">Task Title</h3>
                        <input
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                            type="text"
                            placeholder="Make a UI Design"
                        />
                    </div>
                    <div>
                        <h3 className="text-sm text-gray-300 mb-0.5">Date</h3>
                        <input
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                            type="date"
                        />
                    </div>
                    <div>
                        <h3 className="text-sm text-gray-300 mb-0.5">Assign to</h3>
                        <input
                            value={assignTo}
                            onChange={(e) => setAssignTo(e.target.value)}
                            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                            type="text"
                            placeholder="Employee Name"
                        />
                    </div>
                    <div>
                        <h3 className="text-sm text-gray-300 mb-0.5">Category</h3>
                        <input
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="text-sm py-1 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4"
                            type="text"
                            placeholder="Design, dev, etc"
                        />
                    </div>
                </div>
                <div className="w-2/5 flex flex-col items-start">
                    <h3 className="text-sm text-gray-300 mb-0.5">Description</h3>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        className="w-full h-44 text-sm py-2 px-2 rounded outline-none bg-transparent border-[1px] border-gray-400"
                    />
                    <button className="bg-emerald-500 py-3 hover:bg-emerald-600 px-5 rounded text-sm mt-4 w-full">
                        Create task
                    </button>
                </div>
            </form>
        </div>
    );
};

export default CreateTask;

