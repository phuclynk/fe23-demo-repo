import React from "react";
import "./TodoItem.css"
import { FaTrash } from 'react-icons/fa';


export function TodoItem(props) {
    return (
        <div className="todo-list-content">
            <div className="todo-item" key={props.id}>
                <input 
                    className="todo-item-input" 
                    type="checkbox" checked={props.done} 
                    name="" 
                    id="" 
                    // Chỗ này tương tự như hàm delete chúng ta đã cài đặt bên dưới
                    // ( TodoItem > TodoList > TodoApp ) 
                    onChange={(e) => {
                        props.onUpdate(props)
                        }}/>
                {/* Dùng cú pháp conditional để hiển thị những item đã được checked
                    const checked = done ? "checked" : "";
                    nếu done = true => Trả về "checked"
                    nếu done  = false => Trả về ""
                */}
                {/* 
                    Ở đây chúng dùng cú pháp trên để thêm class "checked" cho thẻ span từ đó tiến hành css dựa trên class đã thêm vào như thẻ span bên dưới
                */}
                <span 
                    className={`todo-item-description ${props.done ? "checked" : ""}`}>
                        {props.title}
                </span>
                {/* Khi click vào button tiến hành truyền id của TodoItem vào callBack để truyền ngược ra ngoài Component cha ( TodoItem > TodoList > TodoApp ) */}
                <button onClick={() => props.onDelete(props.id)} className="todo-item-btn"><FaTrash /></button>  
            </div>  
        </div>
    )
}