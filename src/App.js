import React ,{useState} from 'react';
import Header from './components/_header';
import Footer from './components/_footer';
import Form from './components/Form';
import List from './components/List';
import './App.css';

function App() {
  const [taskList,setTaskList] =useState([]);
  const [selectPage,setSelectPage]=useState('all');
  return (
    <div className="App">
  
     <Header />
      <div>
      <Form taskList={taskList} setTaskList={setTaskList}/>
      <List taskList={taskList} setTaskList={setTaskList} selectPage={selectPage} />
      
      <Footer selectPage={selectPage} setSelectPage={setSelectPage} taskList={taskList} setTaskList={setTaskList} />
      </div>

</div>)
}
export default App;
