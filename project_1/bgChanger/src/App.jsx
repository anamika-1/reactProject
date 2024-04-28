import { useState } from 'react'

function App() {
  const [color, setColor] = useState("olive")
  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>

      <h1 className='flex justify-center py-12' style={{fontSize: "40px", fontWeight: "bold"}}>Background Color Changer</h1>

        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-1 rounded-2xl'>
            <button 
            onClick={() => setColor("red")}
            className='outline-none px-4 py-1 rounded-xl text-white shadow-lg' style={{backgroundColor: "red"}}>Red</button>

            <button 
            onClick={() => setColor("green")}
            className='outline-none px-4 py-1 rounded-xl text-white shadow-lg' style={{backgroundColor: "green"}}>Green</button>

            <button 
            onClick={() => setColor("blue")}
            className='outline-none px-4 py-1 rounded-xl text-white shadow-lg' style={{backgroundColor: "blue"}}>Blue</button>

            <button
            onClick={() => setColor("violet")}
            className='outline-none px-4 py-1 rounded-xl text-white shadow-lg' style={{backgroundColor: "violet"}}>Violet</button>

            <button 
            onClick={() => setColor("purple")}
            className='outline-none px-4 py-1 rounded-xl text-white shadow-lg' style={{backgroundColor: "purple"}}>Purple</button>

            <button
            onClick={() => setColor("yellow")}
            className='outline-none px-4 py-1 rounded-xl text-white shadow-lg' style={{backgroundColor: "yellow", color: "black"}}>Yellow</button>

            <button
            onClick={() => setColor("black")}
            className='outline-none px-4 py-1 rounded-xl text-white shadow-lg' style={{backgroundColor: "black"}}>Black</button>

            <button 
            onClick={() => setColor("white")}
            className='outline-none px-4 py-1 rounded-xl text-white shadow-lg' style={{backgroundColor: "white", color: "black"}}>White</button>

            <button 
            onClick={() => setColor("orange")}
            className='outline-none px-4 py-1 rounded-xl text-white shadow-lg' style={{backgroundColor: "orange"}}>Orange</button>
          </div>
        </div>
    </div>
  )
}

export default App
