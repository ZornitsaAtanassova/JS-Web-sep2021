import TodoListItem4v from './TodoListItem4v';

function TodoList4vPropsJsExpressions () {
    let firstTask = 'Clean your room';
    let firstColor = 'blue';
    let person = {
        name: 'Pesho',
        age: 32,
    };

    return (
        <>
            <h2>Tasks</h2>
            
            <ul>
                <TodoListItem4v color={'light' + firstColor}>{firstTask}</TodoListItem4v>
                <TodoListItem4v color="red">Go shopping</TodoListItem4v>
                <TodoListItem4v color="green" person={person}>Learn React</TodoListItem4v>
            </ul>
        </>
    );
}

export default TodoList4vPropsJsExpressions;
