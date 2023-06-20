import {useState} from 'react';
import TodoListItem8v from './TodoListItem8v';

function TodoList8vConditionalRendering () {
    // Array Destucturing Assignment:
    let [count, setCount] = useState(0);
    let [name , setName] = useState('');

    console.log('render');

    const addButtonClickHandler = (e) => {
        console.log(e);
        setCount(count + 1);
    };

    const inputChangeHandler = (e) => {
        setName(e.target.value);
    };

    const peshoHeader = (
        <header>
            <h4>He is the best!</h4> 
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, iure ipsam laudantium atque expedita quasi maxime dicta voluptas, architecto ex illo distinctio aliquid animi facilis molestiae quidem ratione magni dolore.</p>
        </header>
    );
    return (
        <>
            {name && <h2>{name} - Counter</h2>}
            {name || <h2>No name</h2>}

            {name == 'Pesho' 
                ? peshoHeader
                : <h4>Nah</h4>
            }
            
            <ul>
                <TodoListItem8v>{count}</TodoListItem8v>
            </ul>

            <input type="text" onChange={inputChangeHandler} />

            <button onClick={addButtonClickHandler}>+1</button>
        </>
    );
}

export default TodoList8vConditionalRendering;
