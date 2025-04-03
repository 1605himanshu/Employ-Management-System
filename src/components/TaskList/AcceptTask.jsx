
const AcceptTask = ({ data, onComplete, onFail }) => {
    return (
        <div className="flex flex-col flex-shrink-0 h-full w-[300px] p-5 bg-blue-400 rounded-xl">
            <div className="flex justify-between item-center">
                <h3 className=" text-sm bg-red-600 px-3 py-1 rounded">{data.category}</h3>
                <h4 className="text-sm">{data.date}</h4>
            </div>
            <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
            <p className="text-sm mt-2">{data.description}</p>
            <div className="flex justify-between mt-auto ">
                <button 
                    className="bg-green-600 py-1 px-2 text-sm rounded"
                    onClick={() => onComplete(data)}
                >
                    Mark as Completed
                </button>
                <button
                    className="bg-red-600 py-1 px-2 text-sm rounded"
                    onClick={() => onFail(data)}
                >
                    Mark as Failed
                </button>
            </div>
        </div>
    );
};
export default AcceptTask;
