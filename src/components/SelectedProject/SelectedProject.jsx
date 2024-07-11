import Tasks from "./Components/Tasks/Tasks"

function SelectedProject({ project, onDelete, tasks, onAddTask, onDeleteTask }) {
  const formattedDate = new Date(project.dueDate).toLocaleDateString("en-US", {
    year: "2-digit",
    month: "short",
    day: "numeric",
  })

  return (
    <div className="w-96 mt-16">
      <header className="pb-4 mb-4 border-b-2 border-stone-400">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold mb-2 text-stone-700">{project.title}</h1>
          <button
            onClick={onDelete}
            className="text-stone-700 hover:text-stone-900"
          >
            Delete
          </button>
        </div>
        <p className="mb-4 text-stone-600">{formattedDate}</p>
        <p className="text-stone-600 whitespace-pre-wrap">{project.description}</p>
      </header>
      <Tasks
        onAdd={onAddTask}
        onDelete={onDeleteTask}
        tasks={tasks != [] ? tasks.filter(task => task.projectId === project.id) : []}
      />
    </div>
  )
}

export default SelectedProject
