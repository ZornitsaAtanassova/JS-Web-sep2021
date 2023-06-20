const TodoListItem8v = (props) => {
    let color = 'black';

    if (props.children > 0 && props.children <= 3) {
        color = 'red';
    } else if (props.children > 3 && props.children <= 6) {
        color = 'blue';
    } else if (props.children > 6 && props.children <= 9) {
        color = 'green';
    }

    return <li style={{color}}>{props.children}</li>;


    // if (props.children > 0) {
    //     return <li style={{color: 'pink'}}>{props.children}</li>;
    // };

    // return <li>{props.children}</li>;
}

export default TodoListItem8v;
