import React from 'react'
import TodoContainer from "./TodoContainer";
import TodoItem from "./TodoItem";

class TodoList extends React.Component{
    render() {
        return(
            <ul>
                {this.props.todos.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        handleChangeProps = {this.props.handleChangeProps}
                    />
                ))}
            </ul>
        )
    }
}

export default TodoList