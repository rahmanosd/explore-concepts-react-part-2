import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter'
import Team from './Team'
import Users from './Users'
import Friends from './Friends'

function App() {

function ClickMe(){
 alert('display-click-me')
}

const Click2 =  () => {
alert('display-click-2')
}

const Click4 = (num1) => {
 alert(num1 + 5)
}
  return (
    <>
    <h1>Vite + React</h1>
    <Friends></Friends>
    <Users></Users>
    <Team></Team>
    <Counter></Counter>

    <button onClick={ClickMe}>Click me</button>
    <button onClick={Click2}>Click - 2</button>
    <button onClick={() => {alert('display-click-3')}}>Click - 3</button>
    {/* vejailla */}
    <button onClick={() => Click4(3)}>Click - 4</button>
    </>
  )
}

export default App
