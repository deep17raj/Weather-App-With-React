import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Button from '@mui/material/Button';
import WeatherApp from './WeatherApp.jsx';
import SearchBox from './SearchBox.jsx';
import InfoBox from "./InfoBox.jsx"
import "./App.css"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <WeatherApp/>
    </>
  )
}

export default App
