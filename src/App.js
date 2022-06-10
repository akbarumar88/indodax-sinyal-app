import logo from "./logo.svg"
import "./App.css"
import React, { useState, useEffect } from "react"

import useWindowDimensions from "./helper/useWindowDimensions"
import {
  BrowserRouter,
  Routes, //replaces "Switch" used till v5
  Route,
} from "react-router-dom"
import Home from "./screens/Home"
import Chart from "./screens/Chart"

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/chart" element={<Chart />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  )
}

export default App
