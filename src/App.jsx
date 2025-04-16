import { LoginOutlined, SettingOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
import { use, useState } from "react";

function App() {
  const list = [
    "Restock the bar",
    "Clean the fridges",
    "Resupply the stocks",
    "Pump the wines",
    "Clean the glass washer",
    "Restock the bar",
    "Clean the fridges",
    "Resupply the stocks",
    "Pump the wines",
    "Clean the glass washer",
    "Clean the glass washer",
    "Restock the bar",
    "Clean the fridges",
    "Resupply the stocks",
    "Pump the wines",
    "Clean the glass washer",
  ];

  const [selectedTask, setSelectedTask] = useState(list[0]);
  return (
    <div className="flex h-[100vh]">
      <VerticalNav />
      <div className="flex-8/9 flex">
        <TaskList list={list} setSelectedTask={setSelectedTask} />
        <TaskDescription selectedTask={selectedTask} />
      </div>
    </div>
  );
}

export default App;

function TaskDescription({ selectedTask }) {
  return (
    <div className="flex-1/3 flex flex-col  m-3.5 rounded-2xl rounded-l-none bg-stone-50  pl-3">
      <p className=" font-bold  text-stone-600 h-[2.5rem] flex mb-2  items-center">
        Task:
      </p>
      <p className="text-[0.9rem] text-stone-400 mb-8">{selectedTask}</p>
      <p className="text-[0.9rem] text-stone-400 mb-2">Description</p>
      <p className="text-[0.8rem] text-stone-400 mb-4">
        This is an Description of the task which can be long or short, bold or
        ligth, heavy or light. Read the instructions carefully to complete the
        task without any problem
      </p>
      <p className="text-[0.9rem] text-stone-400 mb-2">
        <Space>
          Tags
          <span className=" px-2 rounded-[4px] bg-red-400 py-0.5 text-white">
            Bar
          </span>
          <span className=" px-2 rounded-[4px] bg-blue-400 py-0.5 text-white">
            Floor
          </span>
        </Space>
      </p>
      <p className="text-[0.9rem] text-stone-400 mb-2">
        Due Time :{" "}
        <span className=" px-2 rounded-[4px] bg-black text-white py-0.5">
          Morning
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

function TaskList({ list, setSelectedTask }) {
  return (
    <div className=" flex flex-col flex-1/2 justify-between  ml-3.5 my-3.5">
      <p className="text-4xl font-bold  text-stone-600 h-[2.5rem] flex  items-center ">
        MONDAY{" "}
      </p>
      <p className="mt-8 mb-4 text-stone-500">Task List:</p>
      <div className=" h-[78vh] overflow-auto">
        {list.map((item) => {
          return (
            <div
              onClick={() => setSelectedTask(item)}
              className="hover:bg-stone-50 border-[0.4px] text-[.75rem] mb-2 border-stone-200 py-2 pl-4 rounded-[3px] font-extralight"
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function VerticalNav() {
  const list = ["Bar", "Floor", "Manager"];
  const [taskBar, setTaskBar] = useState("Bar");
  return (
    <div className="flex-2/9 flex flex-col bg-stone-50 my-3.5 ml-3.5 rounded-2xl rounded-r-none px-3">
      <div className="flex-8/9">
        <p className="text-xl font-bold  text-stone-600  h-[2.5rem] flex  items-center mb-3">
          BrewList
        </p>
        <p className=" text-stone-500 text-[0.7rem] font-bold mb-3">TASKS</p>
        {list.map((item) => {
          return (
            <div
              onClick={() => {
                setTaskBar(item);
              }}
              className={`rounded-[5px] pl-2 text-stone-500  py-1 flex justify-between items-center ${
                taskBar == item ? "bg-stone-100 text-stone-600 font-bold" : ""
              }`}
            >
              {item}{" "}
              <span className="bg-white  rounded-[3px] px-[1px] mr-2 w-5 h-5 flex   justify-center text-[12px]">
                10
              </span>
            </div>
          );
        })}
        <div className="flex justify-center  my-5">
          <div className="h-[2px] bg-stone-300 w-3/4"></div>
        </div>
      </div>

      <div className=" flex-1/9 flex items-center  ">
        <div className=" px-3 py-1 flex justify-between  text-stone-700 cursor-pointer text-[0.7rem]  w-[100%]">
          <Space>
            <LoginOutlined /> Sign out
          </Space>
          <SettingOutlined className="text-xl" />
        </div>
      </div>
    </div>
  );
}
