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
    </div>
  );
}

export default App;
