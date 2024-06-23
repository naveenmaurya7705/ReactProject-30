import React from 'react';
import { useState } from 'react';

const Eight = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const addtodo = () => {
    if (input.trim() !== '') {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  const removeTOdo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index);
    setTodos(updatedTodos);
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <input
        type='text'
        value={input}  // Set the value of the input to the input state
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addtodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => removeTOdo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Eight;
