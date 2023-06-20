import {useState} from 'react';
import TodoListItem7v from './TodoListItem7v';

function TodoList7vEventHandlers () {
    // Array Destucturing Assignment:
    let [count, setCount] = useState(0);
    let [fooChange, setFooChange] = useState('');
    let [fooBlur, setFooBlur] = useState('');

    console.log('render');

    const addButtonClickHandler = (e) => {
        console.log(e);
        setCount(count + 1);
        // setFoo('Pesho');
    };

    const inputChangeHandler = (e) => {
        setFooChange(e.target.value);
    };

    const inputBlurHandler = (e) => {
        setFooBlur(e.target.value);
    };

    return (
        <>
            <h2>{fooChange} - Counter - {fooBlur}</h2>
            
            <ul>
                <TodoListItem7v>{count}</TodoListItem7v>
            </ul>

            <input type="text" onChange={inputChangeHandler} />

            <button onClick={addButtonClickHandler}>+1</button>

            <input type="text" onBlur={inputBlurHandler} />
        </>
    );
}

export default TodoList7vEventHandlers;
