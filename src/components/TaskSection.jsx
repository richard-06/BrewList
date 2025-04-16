import { Space } from "antd";
import { useEffect, useState } from "react";

export function TaskSection({ dailyTask }) {
  // const list = [
  //   "Restock the bar",
  //   "Clean the fridges",
  //   "Resupply the stocks",
  //   "Pump the wines",
  //   "Clean the glass washer",
  //   "Restock the bar",
  //   "Clean the fridges",
  //   "Resupply the stocks",
  //   "Pump the wines",
  //   "Clean the glass washer",
  //   "Clean the glass washer",
  //   "Restock the bar",
  //   "Clean the fridges",
  //   "Resupply the stocks",
  //   "Pump the wines",
  //   "Clean the glass washer",
  // ];
  const [selectedTask, setSelectedTask] = useState(dailyTask[0]);

  useEffect(() => {
    setSelectedTask(dailyTask[0]);
  }, [dailyTask]);
  return (
    <div className="flex-8/9 flex">
      <TaskList dailyTask={dailyTask} setSelectedTask={setSelectedTask} />
      <TaskDescription selectedTask={selectedTask} />
    </div>
  );
}

function TaskDescription({ selectedTask }) {
  console.log(selectedTask);
  return (
    <div className="flex-1/3 flex flex-col  m-3.5 rounded-2xl rounded-l-none bg-stone-50  pl-3">
      <p className=" font-bold  text-stone-600 h-[2.5rem] flex mb-2  items-center text-[1.2rem]">
        Task:
      </p>
      <p className="text-[1.2rem] text-stone-400 mb-8">{selectedTask.task}</p>
      <p className="text-[1.2rem] text-stone-400 mb-2">Description</p>
      <p className="text-[1.1rem] text-stone-400 mb-4">
        {selectedTask.description}
      </p>
      <div className="text-[1rem] text-stone-400 mb-2">
        <Space>
          Tags
          {/* <span className=" px-2 rounded-[4px] bg-red-400 py-0.5 text-white">
            Bar
          </span> */}
          <span className=" px-2 rounded-[4px] bg-blue-400 py-0.5 text-white">
            {selectedTask.tag}
          </span>
        </Space>
      </div>
      <p className="text-[1rem] text-stone-400 mb-2">
        Due Time :{" "}
        <span className=" px-2 rounded-[4px] bg-black text-white py-0.5">
          {selectedTask.period}
        </span>
      </p>
      <div className=" flex justify-evenly flex-1  items-end">
        <button className="w-[40%] mb-10 border border-stone-400 py-1 rounded-[4px] hover:bg-red-500 hover:text-white">
          Void
        </button>
        <button className="w-[40%] mb-10 bg-green-500 text-white border py-1 rounded-[4px]">
          Complete
        </button>
      </div>
    </div>
  );
}

function TaskList({ dailyTask, setSelectedTask }) {
  console.log("rrr", dailyTask[0].task);
  return (
    <div className=" flex flex-col flex-1/2 justify-between  ml-3.5 my-3.5">
      <p className="text-4xl font-bold  text-stone-600 h-[2.5rem] flex  items-center ">
        MONDAY{" "}
      </p>
      <p className="mt-8 mb-4 text-stone-500">Task List:</p>
      <div className=" h-[78vh] overflow-auto">
        {dailyTask.map((item, i) => {
          return (
            <div
              key={i}
              onClick={() => setSelectedTask(item)}
              className="hover:bg-stone-50 border-[0.4px] text-[.75rem] mb-2 border-stone-200 py-2 pl-4 rounded-[3px] font-extralight"
            >
              {item.task}
            </div>
          );
        })}
      </div>
    </div>
  );
}
