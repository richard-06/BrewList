import { LoginOutlined, SettingOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
import { useEffect, useState } from "react";
import { TaskSection } from "./components/TaskSection";
import { supabase } from "./supabaseClient";

function App() {
  const [dailyTask, setDailyTask] = useState([{}]);
  const today = new Date().toLocaleDateString("en-US", { weekday: "long" });
  const date = new Date().toISOString().split("T")[0];

  useEffect(() => {
    const createDailyTable = async () => {
      console.log("creating");
      const { data, error } = await supabase.rpc("create_daily_table", {
        day_name: today,
        date: date,
      });
      if (error) {
        console.error("Error creating daily table:", error);
      } else {
        console.log(`Table for ${today} is ready. at(${data})`);
      }
    };

    console.log("Fetching tasks from table:", date);

    async function fetchTask() {
      const { data, error } = await supabase.from(date).select();

      if (error) {
        console.error("Error fetching tasks:", error);
      } else {
        setDailyTask(data);
        console.log("Fetched tasks:", data);
      }
    }

    createDailyTable();

    fetchTask();
  }, []);

  // useEffect(() => {
  //   // Assuming your table name is literally 4/16/2025
  //   // You need to wrap it in double quotes so PostgreSQL treats it as a literal.
  //   // The outer quotes are JavaScript string delimiters, and the inner ones pass to SQL.

  //   console.log("Fetching tasks from table:", date);

  //   async function fetchTask() {
  //     const { data, error } = await supabase.from(date).select();

  //     if (error) {
  //       console.error("Error fetching tasks:", error);
  //     } else {
  //       setDailyTask(data);
  //       console.log("Fetched tasks:", data);
  //     }
  //   }
  //   fetchTask();
  // }, [date]);

  return (
    <div className="flex h-[100vh]">
      <VerticalNav />
      <TaskSection dailyTask={dailyTask} />
    </div>
  );
}

export default App;

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
              key={item}
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
