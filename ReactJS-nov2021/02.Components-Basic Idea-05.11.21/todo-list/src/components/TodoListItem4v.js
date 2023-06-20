const TodoListItem4v = (props) => {
    // console.log(props);

    if (props.person) {
        console.log(props.person.name);
    }

    return <li style={{color: props.color}}>{props.children} - {props.person?.name}</li>;
}

export default TodoListItem4v;
