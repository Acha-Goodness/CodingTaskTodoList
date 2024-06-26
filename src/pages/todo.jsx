import React, { useState, useEffect } from 'react';
import "./todo.css";
import { Commet } from "react-loading-indicators";
import { useGetAllTodoQuery, useCreateTodoMutation, useDeleteTodoMutation } from '../Api/todoApiSlice';
import { MdDeleteForever } from "react-icons/md";

const Todo = () => {

  const [ todo, setTodo ] = useState({ todoItem:"" });

  const { data, isLoading, isSuccess, isError } = useGetAllTodoQuery();
  
  const [ createTodo ] = useCreateTodoMutation();
  const [ deleteTodo ] = useDeleteTodoMutation();

  const handleOnchange = (e) => {
    setTodo({
        todoItem: e.target.value
    });
  }

  const submitTodoItem = (e) => {
    e.preventDefault();

    createTodo({description: todo.todoItem})
    .then(res => {
        setTodo({ todoItem:"" });
    }).catch(err => {
        console.log(err)
    });
  }

  const delTodo = (id) => {
    deleteTodo(id)
    .then(res => {
        console.log(res);
    }).catch(err => {
        console.log(err)
    });
  }

  return (
        <div className='todo-wrap'>
            <div className='todo-container'>
                <h1>TODO LIST</h1>
                 <form onSubmit={submitTodoItem}>
                    <div className="form-group">
                        <input type="text" name="todoItem" value={todo.todoItem} placeholder="Enter new todo list" onChange={(e) => handleOnchange(e)} minLength={5} required/>
                        <button type="submit">Add</button>
                    </div>
                </form>
                <div className="todo-item-container">
                    { data?.data.todos.length === 0 && <p className='no-task'>You do not have an existing Task <b>ADD A TASK!</b></p>}
                    {
                       isSuccess && data.data.todos.map((item, idx) => {
                             return <div key={idx} className='todo-item'>
                                        <div className="item-text">
                                            <p>{idx += 1}</p>
                                            <p>{item.description}</p>
                                        </div>
                                        <MdDeleteForever className="delete" onClick={() => delTodo(item._id)} />
                                    </div>
                        })
                    }
                    {isLoading && <div className="loader"><Commet color="blue" size="small"/></div>}
                    {isError && <h2 className='err-msg'>An error occured</h2>}
                </div>
            </div>
        </div>
  )
}

export default Todo;
