import React, {useState} from 'react';
import RenderList from './RenderList';

const Form = () => {
  const [todo, setTodo] = useState('');
  const [list, setList] = useState([]);
  
  const handleChange = (e) => {
   setTodo(e.target.value)   
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    setList([...list, todo]);
    setTodo('');
  }
  return (
    <div>
      <h1>To Do List</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="entry">What do you want to do?</label>
        <input 
          type="text" 
          id="entry" 
          value={todo} 
          onChange={handleChange}/>
        <button>Confirm</button>
      </form>

      <RenderList list={list}/>

    </div>

  )
}

export default Form;