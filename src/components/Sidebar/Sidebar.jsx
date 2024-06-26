import Button from '../Button/Button'

function Sidebar({ onStartAddProject }) {
  function handleSelectProject(event) {
    const projectSelected = event.currentTarget
  }

  return (
    <aside className='h-[95vh] bg-stone-800 text-white w-fit px-10 py-16 min-w-72 rounded-br-xl'>
      <h2 className='text-2xl font-bold uppercase'>Your Projects</h2>
      <Button onClick={onStartAddProject}>+ Add Project</Button>
      <ul
        id='your-projects-list'
        className='mt-14 flex flex-col items-start gap-6'
      >
        <li
          className='active px-4 py-1 cursor-pointer'
          data-project='fullstack-dev'
          onClick={event => handleSelectProject(event)}
        >
          Fullstack dev
        </li>
        <li
          className='px-4 py-1 cursor-pointer'
          data-project='mobile-dev'
          onClick={event => handleSelectProject(event)}
        >
          Mobile dev
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar
