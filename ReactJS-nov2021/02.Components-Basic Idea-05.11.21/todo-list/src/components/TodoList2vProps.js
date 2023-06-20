import TodoListItem2v from './TodoListItem2v';

function TodoList2vProps () {
    return (
        <>
            <h2>Tasks</h2>
            
            <ul>
                <TodoListItem2v text="Clean your room" />
                <TodoListItem2v text="Go shopping" />
                <TodoListItem2v text="Learn React" />
            </ul>
        </>
    );
}

export default TodoList2vProps;
