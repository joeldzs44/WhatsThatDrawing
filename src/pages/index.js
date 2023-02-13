import { redirect } from 'next/dist/server/api-utils'
import Head from 'next/head'
//import Image from 'next/image'

export default function Home() {

  const JoinGame = () => {
    window.location.href = '/game'
  }

  const HostGame = () => {
    window.location.href = '/host'
  }

  return (
    <div className='container bg-indigo-600 w-screen'>
      <Head>
        <title>WhatsThatDrawing</title>
        <meta name="description" content="A draw and guess multiplayer family game" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1 className='mx-auto my-auto font-medium text-center text-white text-2xl py-10'> WhatsThatDrawing </h1>

      <div className='mx-auto text-center'>
        <button onClick={JoinGame} className='button bg-yellow-300 hover:bg-yellow-400 rounded-md flex-3 py-2 px-5 mx-2 my-5 w-max'>Join</button>
        <button onClick={HostGame} className="button bg-yellow-300 hover:bg-yellow-400 rounded-md flex-3 py-2 px-5 mx-2 my-5 w-max">Host</button>
      </div>

    </div>
  )
}