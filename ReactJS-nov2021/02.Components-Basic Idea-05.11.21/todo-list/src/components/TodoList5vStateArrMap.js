import React from 'react';
import TodoListItem5v from './TodoListItem5v';

function TodoList5vStateArrMap () {
    let todoState = React.useState(['Clean your room', 'Go shopping', 'Learn react']);

    let todos = todoState[0];
    let setTodos = todoState[1];
    
    console.log(todos);

    return (
        <>
            <h2>Tasks</h2>
            
            <ul>
                {todos.map(todo => <TodoListItem5v>{todo}</TodoListItem5v>)}
            </ul>
        </>
    );
}

export default TodoList5vStateArrMap;
