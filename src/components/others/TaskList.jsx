
import React from "react";

const TaskList = ({ data }) => {
    // Ensure task_count exists, fallback to zeros if undefined
    const taskCount = data?.task_count || { failed: 0, active: 0, completed: 0, newtask: 0 };

    console.log("TaskList - Received Task Count:", taskCount); // Debugging

    return (
        <div className="flex mt-10 justify-between gap-5 screen">
            <div className="rounded-xl w-[45%] py-6 py-9 bg-red-400">
                <h2 className="text-3xl font-semibold flex justify-center">{taskCount.failed}</h2>
                <h3 className="text-xl font-medium flex justify-center mt-2">Failed Task</h3>
            </div>

            <div className="rounded-xl w-[45%] py-6 py-9 bg-blue-400">
                <h2 className="text-3xl font-semibold flex justify-center">{taskCount.active}</h2>
                <h3 className="text-xl font-medium flex justify-center mt-2">Active Task</h3>
            </div>

            <div className="rounded-xl w-[45%] py-6 py-9 bg-green-400">
                <h2 className="text-3xl font-semibold flex justify-center">{taskCount.completed}</h2>
                <h3 className="text-xl font-medium flex justify-center mt-2">Completed Task</h3>
            </div>

            <div className="rounded-xl w-[45%] py-6 py-9 bg-yellow-400">
                <h2 className="text-3xl font-semibold flex justify-center">{taskCount.newtask}</h2>
                <h3 className="text-xl font-medium flex justify-center mt-2">New Task</h3>
            </div>
        </div>
    );
};

export default TaskList;
