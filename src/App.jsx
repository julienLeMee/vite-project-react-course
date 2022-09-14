// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
import Navbar from '../components/Navbar'
import MainContent from '../components/MainContent'
import Skills from '../components/Skills'
import Footer from '../components/Footer'
import './App.css'

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <MainContent />
      <Skills />
      <Footer />
    </div>
  )
}



// const [count, setCount] = useState(0)
      // <h1>My first page React</h1>
      // <div className="card">
      //   <button onClick={() => setCount((count) => count + 1)}>
      //     count is {count}
      //   </button>
      //   <p>
      //     Edit <code>src/App.jsx</code> and save to test HMR
      //   </p>
      // </div>
      // <p className="read-the-docs">
      //   Click on the Vite and React logos to learn more
      // </p>
