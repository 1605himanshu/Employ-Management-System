
import React, { useState } from "react";
import Header from "../others/Header";
import TaskList from "../others/TaskList";
import TaskData from "../TaskList/TaskData";

const EmployeeDashboard = (props) => {
    const [tasks, setTasks] = useState(props.data?.tasks || []);

    // Ensure the user data exists
    const userData = props.data?.user || { name: "Employee" };

    // Function to calculate task counts
    const calculateTaskCount = () => {
        return {
            failed: tasks.filter(task => task.failed).length,
            active: tasks.filter(task => task.active).length,
            completed: tasks.filter(task => task.completed).length,
            newtask: tasks.filter(task => task.new_task).length
        };
    };

    const taskCount = calculateTaskCount();

    // Accept Task Handler
    const handleAcceptTask = (task) => {
        const updatedTasks = tasks.map(t => 
            t.title === task.title ? { ...t, active: true, new_task: false } : t
        );
        setTasks(updatedTasks);
    };

    // Mark as Completed Handler
    const handleCompleteTask = (task) => {
        const updatedTasks = tasks.map(t =>
            t.title === task.title ? { ...t, completed: true, active: false } : t
        );
        setTasks(updatedTasks);
    };

    // Mark as Failed Handler
    const handleFailTask = (task) => {
        const updatedTasks = tasks.map(t =>
            t.title === task.title ? { ...t, failed: true, active: false } : t
        );
        setTasks(updatedTasks);
    };

    return (
        <div className="p-10 bg-[#1C1C1C] h-screen">
            <Header changeUser={props.changeUser} data={userData} />
            <TaskList data={{ task_count: taskCount }} />
            <TaskData 
                data={{ tasks }} 
                onAccept={handleAcceptTask} 
                onComplete={handleCompleteTask} 
                onFail={handleFailTask} 
            />
        </div>
    );
};

export default EmployeeDashboard;


