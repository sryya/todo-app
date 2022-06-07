<<<<<<< HEAD
import React ,{useState,useEffect} from 'react';
import Header from './components/_header';
import Footer from './components/_footer';
import Form from './components/Form';
import List from './components/List';


import './App.css';

function App() {
  const [taskList,setTaskList] =useState([]);
  useEffect(() => {
    console.log(taskList);
  }, [taskList]);
  return (
    <div className="App">
  
     <Header />
      <div>
      <Form taskList={taskList} setTaskList={setTaskList}/>
      <List taskList={taskList} setTaskList={setTaskList} />
      
      <Footer />
      </div>
=======
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
>>>>>>> 6787fb3749e7aadeb1efc3606fd0cfd20cb893e0
    </div>
  );
}

export default App;
