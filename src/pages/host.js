function host() {
  return (
    <div className='container bg-indigo-600 w-screen'>
      <h1 className='mx-auto my-auto font-medium text-center text-white text-2xl py-10'> Host A Game ! </h1>

      <div className='mx-auto text-center flex flex-auto flex-wrap'>
        <p className='text-yellow-300 font-bold flex-3 py-2 px-5 mx-2 my-5'>Draw Time</p>
        <input className="rounded-md h-6 my-auto" type="text" />
        <p className="text-yellow-300 font-bold flex-3 py-2 px-5 mx-2 my-5">Rounds</p>
        <input className="rounded-md h-6 my-auto" type="text" />
        <p className="text-yellow-300 font-bold flex-3 py-2 px-5 mx-2 my-5">Word Count</p>
        <input className="rounded-md h-6 my-auto" type="text" />
        <p className="text-yellow-300 font-bold flex-3 py-2 px-5 mx-2 my-5">Hint</p>
        <input className="rounded-md h-6 my-auto" type="text" />
      </div>

    </div>
  )
}

export default host