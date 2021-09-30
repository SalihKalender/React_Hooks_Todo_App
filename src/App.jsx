import { useState, useRef } from 'react'
import logo from './logo.svg'
import Todo from './components/todo'
import './App.css'

function App() {
  const [todos, setTodo] = useState([])
  const [ todoText, setTodoText ] = useState('')
  const input = useRef(null)

  const getTodoValue = (e) => {
    const value = e.target.value
    return setTodoText(value)
  }

  const addTodo = () => {
    const todoValue = { text: todoText, id: Math.random()*1000, isEdit: false }
    setTodoText('')
    input.current.value = ''
    setTodo((prev_todos) => {
      return [ ...prev_todos, todoValue ]
    })
  }

  const editTodo = (infos) => {
    const newTodos = todos.map((todo) => {
      if(todo.id == infos.id) {
        todo.text = infos.text
        todo.isEdit = false
      }
      return todo
    })
    setTodo(newTodos)
  }

  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => {
      if(todo.id != id) {
        return todo
      }
    })
    setTodo(newTodos)
  }

  const editView = (id) => {
    const newTodos = todos.map((todo) => {
      todo.id == id ? todo.isEdit = true : todo.isEdit = false
      return todo
    })
    setTodo(newTodos)
  }

  return (
    <>
      <div className="h-100 w-full flex items-center justify-center bg-teal-lightest font-sans">
        <div className="bg-white rounded shadow p-6 m-4 w-full lg:w-3/4 lg:max-w-lg">
            <div className="mb-4">
                <h1 className="text-grey-darkest">Todo List</h1>
                <div className="flex mt-4">
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo" onBlur={getTodoValue} ref={input}/>
                    <button onClick={addTodo} className="flex-no-shrink p-2 border-2 rounded text-teal border-teal border-green-200 text-green-600 hover:text-white hover:bg-teal-600">Add</button>
                </div>
            </div>
            { todos.map((todo => {
              return (
                <Todo key={todo.id} todo={todo} editView={editView} editTodo={editTodo} removeTodo={removeTodo} />
              )
            })) }
        </div>
      </div>
    </>
  )
}

export default App
