import React from "react"
import Navbar from "./components/navbar"
import "./styles/style.css"
import Header from "./components/header"
function App()
{
  return (
    <div className="container">
      <Navbar />
      <Header />
    </div>
  )
}

export default App;