import { useState } from "react";

export default function NewTask({ onAdd, onClear }) {
  const [task, setTask] = useState("");
  const handleChange = (event) => {
    setTask(event.target.value);
  };
  const handleClick = () => {
    if (task.trim() === "") {
      return;
    }
    onAdd(task);
    setTask("");
  };
  return (
    <div className="flex items-center gap-4">
      <input
        type="text"
        value={task}
        className="w-64 px-2  py-1 bg-stone-200 rounded-sm border-b-stone-300 text-stone-600 focus:outline-none focus:border-stone-600"
        onChange={handleChange}
      />
      <button
        className="rounded-md text-stone-700 hover:text-stone-950"
        onClick={handleClick}
      >
        Add Task
      </button>
    </div>
  );
}
