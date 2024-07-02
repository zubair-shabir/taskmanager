import React, { useState, useEffect } from "react";
import {
  FaCheck,
  FaPencilAlt,
  FaPlus,
  FaSearch,
  FaTrash,
} from "react-icons/fa";

import { ToastContainer } from "react-toastify";
import { createTask, GetAllTasks } from "./api";
import { notify } from "./utils";

const TaskManager = () => {
  const [input, setInput] = useState("");
  const [tasks, setTasks] = useState([]);
  const [copyTasks, setCopyTasks] = useState([]);
  const handleAddTask = async () => {
    const obj = {
      taskName: input,
      isDone: false,
    };
    try {
      const { success, message } = await createTask(obj);
      if (success) {
        notify(message, "success");
      } else {
        notify(message, "error");
      }
      setInput("");
    } catch (error) {
      notify("failed To create task", "error");
    }
  };
  const FetchAllTasks = async () => {
    try {
      const { success, message, data } = await GetAllTasks();
      if (success) {
        console.log(data);
        setTasks(data);
        setCopyTasks(data);
        // notify(message, "success");
      } else {
        notify(message, "error");
      }
      setInput("");
    } catch (error) {
      notify("failed To create task", "error");
    }
  };
  useEffect(() => {
    FetchAllTasks();
  }, []);

  return (
    <div className="d-flex flex-column align-items-center w-50  m-auto mt-5">
      <h1 className="mb-4">Task Manager App</h1>
      {/** Input and Search Fields */}

      <div className="d-flex justify-content-between align-items-center mb-4 w-100">
        <div className="input-group flex-grow-1 me-2">
          <input
            value={input}
            type="text"
            className="form-control me-1"
            placeholder="Add an new task"
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            className="btn btn-success btn-sm me-2"
            onClick={handleAddTask}
          >
            <FaPlus className="m-2" />
          </button>
        </div>
        <div className="input-group flex-grow-1 ">
          <span className="input-group-text">
            <FaSearch />
          </span>
          <input
            type="text"
            className="form-control"
            placeholder="Search Tasks"
          />
        </div>
      </div>
      {/* Task List */}
      <div className="d-flex flex-column w-100">
        {tasks.map((item) => (
          <div
            className="m-2 p-2 border bg-light w-100 rounded-3 d-flex justify-content-between align-items-center"
            key={item._id}
          >
            <span className={item.isDone ? "text-decoration-line-through" : ""}>
              {item.taskName}
            </span>

            <div className="">
              <button type="button" className="btn btn-success btn-sm me-2" onClick={}>
                <FaCheck />
              </button>
              <button type="button" className="btn btn-primary btn-sm me-2">
                <FaPencilAlt />
              </button>
              <button type="button" className="btn btn-danger btn-sm me-2">
                <FaTrash />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Toastify */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
      />
    </div>
  );
};

export default TaskManager;
