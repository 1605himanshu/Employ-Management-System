import React from "react";
import AcceptTask from "./AcceptTask";

import NewTask from "./NewTask";
import CompleteTask from "./CompleteTask";
import FailedTask from "./FailedTask";
const TaskData = ({ data, onAccept, onComplete, onFail }) => {
    return (
        <div id="taskdata" className="h-[55%] overflow-x-auto w-full flex item-center justify-start gap-5 flex-nowrap py-5 mt-10">
            {data.tasks.map((elem, idx) => {
                if (elem.active) {
                    return <AcceptTask key={idx} data={elem} onComplete={onComplete} onFail={onFail} />;
                }
                if (elem.new_task) {
                    return <NewTask key={idx} data={elem} onAccept={onAccept} />;
                }
                if (elem.completed) {
                    return <CompleteTask key={idx} data={elem} />;
                }
                if (elem.failed) {
                    return <FailedTask key={idx} data={elem} />;
                }
            })}
        </div>
    );
};
export default TaskData;
