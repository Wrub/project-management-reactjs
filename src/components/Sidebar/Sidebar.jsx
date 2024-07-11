/* eslint-disable react/prop-types */
import Button from "../Button/Button"

function Sidebar({ onStartAddProject, projects, onSelectProject, selectedProjectId }) {
  return (
    <aside className="h-[95vh] bg-stone-800 text-white w-fit px-10 py-16 min-w-72 rounded-br-xl">
      <h2 className="text-2xl font-bold uppercase">Your Projects</h2>
      <Button onClick={onStartAddProject}>+ Add Project</Button>
      <ul
        id="your-projects-list"
        className="mt-6 flex flex-col items-start gap-6"
      >
        {projects.map(project => {
          let cssClasses =
            "px-4 py-1 my-1 rounded-sm text-left w-full hover:text-stone-100 hover:bg-stone-700 hover:bg-opacity-35 transition-all duration-200 ease-out"

          if (selectedProjectId && project.id === selectedProjectId) {
            cssClasses += " bg-stone-950 text-stone-200 pointer-events-none"
          } else {
            cssClasses += " text-stone-500 bg-none"
          }
          return (
            <li key={project.id}>
              <button
                onClick={() => onSelectProject(project.id)}
                className={cssClasses}
              >
                {project.title}
              </button>
            </li>
          )
        })}
      </ul>
    </aside>
  )
}

export default Sidebar
