import React from 'react'
import changeColor from '../hoc/changeColor';



// functional component where the todos get rendered and the delete option applied.
const Todos = ({ todos, deleteTodo }) => {
    const todoList = todos.length ? (
        todos.map(todo => {
            return (

                <div className="collection-item" key={todo.id}>
                    <span>{todo.content}</span>
                    <button className="btn brown darken-3" onClick={() => deleteTodo(todo.id)}>Delete</button>
                </div>
            )
        })
    ) : (
            <p className="center">No todos remaining! <br /> Please use the input field below to add more todos.</p>
        )
    return (
        <div>
            <h1 className="center title">Todos</h1>
            <div className="todos collection">
                {todoList}
            </div>
        </div>

    )
}

export default changeColor(Todos);