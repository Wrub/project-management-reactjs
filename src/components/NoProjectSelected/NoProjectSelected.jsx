import NoProjectImage from '../../assets/no-project.png'
import Button from '../Button/Button'

function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className='mt-24 text-center w-2/3'>
      <img
        loading='eager'
        className='w-16 h-16 object-contain mx-auto'
        src={NoProjectImage}
        alt='Empty task list'
      />
      <h2 className='text-xl font-bold my-4 text-stone-800'>No Project Selected</h2>
      <p className='text-stone-700 mb-4'>Please select a project or get started with a new one</p>
      <Button onClick={onStartAddProject}>Create new project</Button>
    </div>
  )
}

export default NoProjectSelected
