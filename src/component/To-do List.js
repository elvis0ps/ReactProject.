




import React, { useState } from 'react';

import './TodoList.css'




function TodoList() {

 const [tasks, setTasks] = useState([]);

 const [inputValue, setInputValue] = useState('');




 const handleInputChange = (event) => {

 setInputValue(event.target.value);

 };




 const handleAddTask = () => {

 if (inputValue.trim() !== '') {

 setTasks([...tasks, inputValue]);

 setInputValue('');

 }

 };




 const handleDeleteTask = (index) => {

 const updatedTasks = [...tasks];

 updatedTasks.splice(index, 1);

 setTasks(updatedTasks);

 };




 return (

 <div className="Todo">

 <h1>Todo List</h1>

 <input type="text" className="input" value={inputValue} onChange={handleInputChange} />

 <button onClick={handleAddTask} className="btn">Add Task</button>

      <ul>

       {tasks.map((task, index) => (

         <li key={index}>

            {task}

            <button className="btn" onClick={() => handleDeleteTask(index)}>Delete</button>

          </li>

        ))}

      </ul>

 </div>

 );

}




export default TodoList;










