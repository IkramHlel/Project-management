import NewTask from "./NewTask";

export default function Tasks({ onAdd, onClear, tasks }) {
  return (
    <section>
      <h2 className="text-stone-700 font-bold text-2xl mb-4">Tasks</h2>
      <NewTask onAdd={onAdd} onClear={onClear} />
      {tasks.length === 0 && (
        <p className="text-stone-800 my-4">
          This project does not have any task yet.
        </p>
      )}
      {tasks.length > 0 && (
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.text}</span>
              <button
                className="text-stone-700 hover:text-red-500"
                onClick={() => onClear(task.id)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
