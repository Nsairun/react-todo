import React, { useState } from 'react';
import { FcPlus, FcDeleteRow, FcApproval } from 'react-icons/fc';
import './to-do.css';

function ToDo() {
  const [addTodo, setAddTodo] = useState();
  const [todoList, setTodoList] = useState([]);

  const handleChange = (e) => {
    setAddTodo(e.target.value);
  };

  const addItem = () => {
    setTodoList((previous) => [...previous, addTodo]);
    setAddTodo('');
  };

  function DeleteTodo(text) {
    const newTodo = todoList.filter((todo) => {
      return todo !== text;
    });
    setTodoList(newTodo);
  }

  return (
    <div>
      <div className="todo-container">
        <h1>Todo-List App</h1>
        <div className="input-section">
          <p>Input Your To do Items Here</p>
          <input
            type="text"
            placeholder="text"
            onChange={handleChange}
            value={addTodo}
          />
          <div className="display-section">
            {todoList?.length > 0 ? (
              <ul>
                {todoList?.map((todo) => (
                  <div className="todo">
                    <li>{todo}</li>
                    <div className="listeners">
                      <button type="button" onClick={() => DeleteTodo(todo)}>
                        <FcDeleteRow />
                      </button>
                      <button type="button">
                        <FcApproval />
                      </button>
                    </div>
                  </div>
                ))}
              </ul>
            ) : (
              <div className="empty">
                <p>Nothing here</p>
              </div>
            )}
            <div className="listeners">
              <button type="button" onClick={addItem}>
                <FcPlus />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToDo;
