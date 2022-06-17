import React from "react";
import { TodoItem } from "./TodoItem/TodoItem";
import { TodoTitle } from "./TodoTitle/TodoTitle";
import "./TodoList.css"

export function TodoList(props) {
    return (
        <div className="todo-list">
            <TodoTitle/>
            {/* Truyền callBack onDeleteTodoItem thêm lần nữa vào TodoItem để lấy chính xác id của item cần xóa */}
            {/* Tương tự như hàm onDeleteTodoItem truyền thêm hàm onUpdateTodoItem vào tới TodoItem để lấy data */}
            {
                props.todoList.map(item => <TodoItem 
                    onUpdate={props.onUpdateTodoItem} 
                    onDelete={props.onDeleteTodoItem} 
                    key={item.id} 
                    {...item}/>)
            }
        </div>
    )
}