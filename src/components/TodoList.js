import React from "react";
import TodoItem from "./TodoItem";

const TodoList = (props) => {
    const list = props.tasks.map (todo => {
        return <TodoItem {...todo} key={todo.id} />
    });

    return (
        <div>
            <ul>
                {list}
            </ul>
        </div>
    );
}

export default TodoList;