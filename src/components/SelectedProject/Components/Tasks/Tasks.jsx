import NewTask from "./NewTask"

function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section className="mt-10">
      <h2 className="text-stone-700 font-bold text-xl">Tasks</h2>
      <NewTask onAdd={onAdd} />
      {tasks.length === 0 && (
        <p className="py-4 text-stone-700">This project does not have any task yet.</p>
      )}
      {tasks.length > 0 && (
        <ul className="pt-4 mt-8 rounded-md space-y-4">
          {tasks.map(task => (
            <li
              key={task.id}
              className="flex justify-between py-1 px-2 text-stone-700 bg-stone-300/50"
            >
              <span>{task.text}</span>
              <button
                className="text-stone-700 hover:text-red-500"
                onClick={() => onDelete(task.id)}
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default Tasks
