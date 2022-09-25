import React from 'react'
import styles from "./TodoItem.module.css"


class TodoItem extends React.Component{
    completedStyle = {
        fontStyle: "italic",
        color: "#595959",
        opacity: 0.4,
        textDecoration: "line-through"
    };

    handleEditing = () => {
        console.log("edit mode activated");
        this.setState({
            editing: true
        })
    }

    state = {
        editing: false,
    }

    handleUpdatedDone = event => {
        if (event.key === "Enter") {
            this.setState({ editing: false })
        }
    }


    render(){

        let viewMode = {}
        let editMode = {}

        if (this.state.editing) {
            viewMode.display = "none"
        } else {
            editMode.display = "none"
        }

        this.id = this.props.todo.id;
        this.title = this.props.todo.title;
        this.completed = this.props.todo.completed;

        return (<li className={styles.item}>
            <div onDoubleClick={this.handleEditing} style={viewMode}>...</div>
            <input
                type="text"
                style={editMode}
                className={styles.textInput}
                value={this.title}
                onChange={e => {
                this.props.setUpdate(e.target.value, this.id)

            }}
                onKeyDown={this.handleUpdatedDone}
            />
            <input
                type="checkbox"
                className={styles.checkbox}
                checked={this.completed}
                onChange={() => this.props.handleChangeProps(this.id)}
            />
            <button onClick={() => this.props.deleteTodoProps(this.id)}>
                Delete
            </button>
            <span style={this.completed ? this.completedStyle : null}>
                {this.title}
            </span>
        </li>)
    }


}

export default TodoItem