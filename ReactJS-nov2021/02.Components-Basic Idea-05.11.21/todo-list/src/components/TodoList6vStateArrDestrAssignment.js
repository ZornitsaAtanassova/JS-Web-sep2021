import {useState} from 'react';
import TodoListItem6v from './TodoListItem6v';

function TodoList6vStateArrDestrAsignment () {
    // Array Destucturing Assignment:
    let [todo, setTodo] = useState('initial Todo');

    // let [todo, setTodo] = React.useState('initial Todo');
    // 
    // let todoState = React.useState(['Clean your room', 'Go shopping', 'Learn react']);
    // let todos = todoState[0];
    // let setTodos = todoState[1];

    return (
        <>
            <h2>Tasks</h2>
            
            <ul>
                <TodoListItem6v>{todo}</TodoListItem6v>
            </ul>
        </>
    );
}

export default TodoList6vStateArrDestrAsignment;
