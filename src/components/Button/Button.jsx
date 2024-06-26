function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className='w-fit h-8 bg-black px-5 rounded-md my-5 text-sm opacity-35 hover:opacity-100 transition-opacity duration-200 ease-out'
    >
      {children}
    </button>
  )
}

export default Button
