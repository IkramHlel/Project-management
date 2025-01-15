import Tasks from "./Tasks";
export default function SelectedProject({
  project,
  onDelete,
  onAddTask,
  onDeleteTask,
  tasks,
}) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
  return (
    <div className="w-[35rem] mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-300">
        <div className="flex items-center justify-between">
          <h1 className="text-stone-600 font-bold text-3xl mb-2">
            {project.title}
          </h1>
          <button
            className="rounded-md text-stone-600 hover:text-stone-950"
            onClick={() => onDelete(project.id)}
          >
            Delete
          </button>
        </div>

        <p className="text-stone-400 mb-4 ">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">
          {project.description}
        </p>
      </header>
      <Tasks
        onAdd={onAddTask}
        onClear={onDeleteTask}
        selectedProjectId={project.id}
        tasks={tasks}
      />
    </div>
  );
}
