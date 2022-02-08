import React from 'react';
import logo from './logo.svg';
import './App.css';
import TaskList from "./Components/taskList"
import Header from "./Components/Header"
import Footer from "./Components/Footer"

function App() {
  return (
    <div className="App">
      <Header/>
      <TaskList/>
      <Footer/>
    </div>
  );
}

export default App;
