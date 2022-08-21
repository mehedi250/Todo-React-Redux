import React, { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { addTodo, deleteTodo } from '../actions';
import './todo.css'

function Todo() {
  const [inputData, setInputData] = useState('');
  const list = useSelector((state)=>state.todoReducers.list)
  const dispatch = useDispatch();
  

console.log(list)
  return (
    <>
    <div className="container py-4">
      <form id="accesspanel"  className='mx-auto'>
        <div className="background-wrap">
            <div className="background"></div>
        </div>
        <h1 id="litheader">TODO LIST</h1>
        <div className="inset">
            <p className='mb-3'>Add your list here ✌️..</p>
            <div className='d-flex input-waper mb-4'> 
                <input type="text" name="todo" id="todo" value={inputData} onChange={(event)=>setInputData(event.target.value)} placeholder="Add items" />
                <button type="button" onClick={()=>dispatch(addTodo(inputData))}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"/></svg>
                </button>
            </div>

            { list.map((item)=>{
              return(
                <div key={item.id} className='d-flex input-waper item-waper align-items-center my-2 py-2 ps-2'> 
                    <div className='w-100'>{item.data}</div>
                    <button type="button" className='text-danger' onClick={()=>dispatch(deleteTodo(item.id))}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-trash3-fill" viewBox="0 0 16 16">
                            <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5Zm-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5ZM4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06Zm6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528ZM8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5Z"/>
                        </svg>
                    </button>
                </div>
              )
            })}
            

        </div>
        <p className="p-container">
          <input type="submit" name="Login" disabled id="go" value="Clear All"/>
        </p>
      </form>
    </div>
      
    </>
  )
}

export default Todo