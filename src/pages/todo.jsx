import React, { useState } from 'react';
import "./todo.css";
import { MdDeleteForever } from "react-icons/md";

const Todo = () => {

  const [ todo, setTodo ] = useState({
    todoItem:""
  });

  const todoItems = [
    {
        id:1,
        item:"Go to market"
    },
    {
        id:2,
        item:"Go to Church"
    },
    {
        id:3,
        item:"Play Video Game"
    }
  ];

  const handleOnchange = (e) => {
    setTodo({
        todoItem: e.target.value
    })
  }

  const submitTodoItem = (e) => {
    e.preventDefault();
    console.log(todo.todoItem);
  }

  const deleteTodo = (id) => {
    const newTodo = todoItems.filter(item => item.id !== id);
    console.log(newTodo);
  }

  return (
        <div className='todo-wrap'>
            <div className='todo-container'>
                <h1>TODO LIST</h1>
                <form onSubmit={submitTodoItem}>
                    <div className="form-group">
                        <input type="text" name="todoItem" value={todo.todoItem} placeholder="Enter new todo list" onChange={(e) => handleOnchange(e)}/>
                        <button type="submit">Add</button>
                    </div>
                </form>
                <div className="todo-item-container">
                    {
                        todoItems.map(item => {
                             return <div key={item.id} className='todo-item'>
                                        <div className="item-text">
                                            <p>{item.id}</p>
                                            <p>{item.item}</p>
                                        </div>
                                        <MdDeleteForever className="delete" onClick={() => deleteTodo(item.id)} />
                                    </div>
                        })
                    }
                </div>
            </div>
        </div>
  )
}

export default Todo;
