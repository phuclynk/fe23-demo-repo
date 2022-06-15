import React, { useState } from "react";
import "./TodoAdd.css"
import { FaPlusCircle } from 'react-icons/fa';

export function TodoAdd(props) {
    const [newTodoValue, setNewTodoValue] = useState('');

    // Thực hiện việc cập nhật state cho todo item mới
    const handleNewTodoValueChange = (e) => {
        setNewTodoValue(e.target.value);
    }

    // Thực hiện submit giá trị todo item mới và gửi lên compoent cha
    const handleSubmitNewTodoValue = () => {
        props.onTodoItemSubmit(newTodoValue)
        // Dùng state để thay đổi value của input về string rỗng khi đã submit xong
        setNewTodoValue("")
    }

    return (
        <div className="todo-add">
            <input 
                onChange={handleNewTodoValueChange} 
                type="text" 
                className="todo-add-input" 
                placeholder="What need to be done?"
                // Dùng state để thay đổi value của input về string rỗng khi đã submit xong
                // Lúc này value của input sẽ nhận từ state vào 
                value={newTodoValue}
            />
            <button className="todo-add-btn" 
                onClick={handleSubmitNewTodoValue}
                ><FaPlusCircle />Add</button>
        </div>
    )
}