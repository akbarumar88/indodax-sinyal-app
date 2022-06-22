import logo from "./logo.svg"
import "./App.css"
import { useState, useEffect } from "react"
import axios from "axios"
// import { BASE_API } from "./GlobalVar"
// import dotenv from 'dotenv'
// dotenv.config()

const { REACT_APP_BASE_API: BASE_API } = process.env

function App() {
  let [data, setData] = useState([])
  useEffect(() => {
    axios
      .get(`${BASE_API}/all`)
      .then(({ data }) => {
        console.log("sukses", data)
      })
      .catch((err) => {
        console.log("Err saat get data all", err.response?.data ?? err.message)
      })
  }, [])
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1 className="text-3xl font-bold underline">Hello world!</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React.js
        </a>
      </header>
    </div>
  )
}

export default App
