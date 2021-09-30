import { useState, useRef } from "react"

export default function todo(props) {
    const [ todo ] = useState(props.todo)
    const input = useRef(null)
    return (
        <div className="flex mb-4 items-center">
            { todo.isEdit
              ?
              <>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 mr-4 text-grey-darker" placeholder="Add Todo" defaultValue={todo.text} readOnly={false} ref={input}/>
              <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white border-green-500 text-green-700 border-green hover:bg-green-600" onClick={() => props.editTodo({id: todo.id, text: input.current.value})}>Done</button>
              </>
              :
              <>
              <p className="w-full text-grey-darkest"> { todo.text } </p>
              <button onClick={() => props.removeTodo(todo.id)} className="flex-no-shrink p-2 ml-2 border-2 rounded text-red-600 border-red border-red-600 hover:text-white hover:bg-red-600">Remove</button>
              <button onClick={() => props.editView(todo.id)} className="flex-no-shrink p-2 ml-2 border-2 rounded text-yellow-600 border-yellow border-yellow-600 hover:text-white hover:bg-yellow-600">Edit</button> 
              </>
            }
            
        </div>
    )
    
}