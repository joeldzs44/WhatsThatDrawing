function game() {

    const JoinGame = () => {
        console.log("Game Joined")
    }

  return (
    <div className='container bg-indigo-600 w-screen'>
      <h1 className='mx-auto my-auto font-medium text-center text-white text-2xl py-10'> Join A Game ! </h1>

      <div className='mx-auto text-center flex flex-auto flex-wrap'>
        <p className='text-yellow-300 font-bold flex-3 py-2 px-5 mx-2 my-5'>Enter Name</p>
        <input className="rounded-md h-6 my-auto" type="text" />
        <p className="text-yellow-300 font-bold flex-3 py-2 px-5 mx-2 my-5">Enter URL</p>
        <input className="rounded-md h-6 my-auto" type="text" />
        
        <div className='mx-auto text-center'>
            <button onClick={JoinGame} className='button bg-yellow-300 hover:bg-yellow-400 rounded-md flex-3 py-2 px-5 mx-2 my-5 w-max'>Join</button>
        </div>
      </div>

    </div>
  )
}

export default game