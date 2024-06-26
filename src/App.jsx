import { useState } from 'react'
import NewProject from './components/NewProject/NewProject'
import NoProjectSelected from './components/NoProjectSelected/NoProjectSelected'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  const [projectsState, setProjectsState] = useState({ selectedProjectId: undefined, projects: [] })

  function handleStartAddProject() {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      }
    })
  }

  function handleAddProject(projectData) {
    setProjectsState(prevState => {
      const newProject = {
        ...projectData,
        id: Math.random(),
      }

      return {
        ...prevState,
        projects: [...prevState.projects, newProject],
      }
    })
  }

  console.log(projectsState)

  let content

  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} />
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className='h-screen text-stone-50 flex gap-8'>
      <Sidebar onStartAddProject={handleStartAddProject} />
      {content}
    </main>
  )
}

export default App
