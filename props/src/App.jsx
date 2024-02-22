import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  // let obj = {
  //   name1 : "Muhammad Bilal Riaz",
  //   btn1 : "Press button",
  //   des  : "Hi ,Iam Bilal  brother how are you ,I can helping you"
  // }
 
  // let obj2 = {
  //   name1 : "Sufyan Ahmed ",
  //   btn1 : "Send",
  //   des  : "Hi ,Iam Sufyan  brother how are you ,I can helping you"
  // }


  return (
    <>
    <h1>Props , Components and Tailwind CSS</h1>
    
    <div style={{
      display:'flex',
      justifyContent: 'center',
      flexWrap:'wrap',
      margin:'10px',
      
    }}>
    <Card username = "Muhammad Bilal Riaz"  btnTxt = "Click me"/>
    <Card username = " Sufyan"  btnTxt = "send me"/>
    </div>
    <button className='bg-green-400 text-blue p-4 rounded-xl'>Button using tailwind css</button>
    </>
  )
}

export default App
