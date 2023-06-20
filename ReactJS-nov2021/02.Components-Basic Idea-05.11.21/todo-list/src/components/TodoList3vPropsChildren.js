import TodoListItem3v from './TodoListItem3v';

function TodoList3vPropChildren () {
    return (
        <>
            <h2>Tasks</h2>
            
            <ul>
                <TodoListItem3v color="pink">Clean your room</TodoListItem3v>
                <TodoListItem3v color="red">Go shopping</TodoListItem3v>
                <TodoListItem3v color="green">Learn React</TodoListItem3v>
            </ul>
        </>
    );
}

export default TodoList3vPropChildren;
