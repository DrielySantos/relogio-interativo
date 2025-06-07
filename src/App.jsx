import { React } from 'react'
import Greeting from './assets/components/Greeting';
import Clock from './assets/components/Clock';
import TheThemeToggle from './assets/components/ThemeToggle';
import './App.css'

function App() {

  return (
    <main >
      <Greeting />
      <Clock />
      <TheThemeToggle />
    </main>
  )
}

export default App;
