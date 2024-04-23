import React from 'react';
import "./todo.css";

const todo = () => {
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
  ]
  return (
        <div className='todo-wrap'>
            <div className='todo-container'>
                <h1>TODO LIST</h1>
                <form>
                    <div className="form-group">
                        <input type="text" placeholder="Enter new todo list"/>
                        <button type="submit">Add</button>
                    </div>
                </form>
                <div className="todo-item-container">
                    {
                        todoItems.map(item => {
                             return <div className='todo-item'>
                                        <div>
                                            
                                        </div>
                                    </div>
                        })
                    }
                </div>
            </div>
        </div>
  )
}

export default todo
