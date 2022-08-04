import React, { Component } from "react";
import TodoItem from './TodoItem'

class TodoItemList extends Component {
    // 리렌더링 여부 (최적화)
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
    }

    render() {
        const { todos, onToggle, onRemove } = this.props;

        const todoList = todos.map(
            ({id, text, checked}) => (
                <TodoItem
                id={id}
                text={text}
                checked={checked}
                // {...todo} 와 같음
                onToggle={onToggle}
                onRemove={onRemove}
                key={id}
                />
            )
        )
        return (
            <div>
                {todoList}
            </div>
        );
    }
}

export default TodoItemList;