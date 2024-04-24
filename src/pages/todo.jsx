import React, { useState, useEffect } from 'react';
import "./todo.css";
import { useGetAllTodoQuery, useCreateTodoMutation, useDeleteTodoMutation } from '../Api/todoApiSlice';
import { MdDeleteForever } from "react-icons/md";

const Todo = () => {

  const [ todo, setTodo ] = useState({ todoItem:"" });
  const [ errMsg, setErrMsg ] = useState();

  const { data, isLoading, isSuccess } = useGetAllTodoQuery();
  
  const [ createTodo ] = useCreateTodoMutation();
  const [ deleteTodo ] = useDeleteTodoMutation();

  const handleOnchange = (e) => {
    setTodo({
        todoItem: e.target.value
    })
  }

  const submitTodoItem = (e) => {
    e.preventDefault();
    if(todo.todoItem === "") return "Please enter a todo decription"
    createTodo(todo.todoItem)
    .then(res => {
        console.log(res)
    }).catch(err => {
        console.log(err)
    });
  }

  const delTodo = (id) => {
    // const newTodo = todoItems.filter(item => item.id !== id);
    // console.log(newTodo);
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
                        isSuccess && data.data.todos.map((item, idx) => {
                             return <div key={idx} className='todo-item'>
                                        <div className="item-text">
                                            <p>{idx += 1}</p>
                                            <p>{item.description}</p>
                                        </div>
                                        <MdDeleteForever className="delete" onClick={() => delTodo(item.id)} />
                                    </div>
                        })
                    }
                </div>
            </div>
        </div>
  )
}

export default Todo;
