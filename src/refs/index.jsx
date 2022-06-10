
// Sau khi nhập tên thì focus vào password

import { useRef } from "react";

// Tạo 1 button để thực hiện reset form (set value của 2 input về rỗng)
function Login() {
    const passwordRef = useRef();
    const usernameRef = useRef();

    const handleUsernameKeyDown = (e) => {
        if(e.key.toLowerCase() === "enter") {
            passwordRef.current.focus();
        }
    }

    const handlePasswordKeyDown = (e) => {
        if(e.key.toLowerCase() === "enter") {
            passwordRef.current.value = ''
            usernameRef.current.value = ''
        }
    }

    return ( <div className="login-form">
        <h3>Login</h3>
        <form onSubmit={(e) => {
            e.preventDefault()

            // lấy value

            // validate

            // gọi api để submit
        }}>
            <input 
                ref={usernameRef}
                placeholder="User Name" 
                name="username" 
                type={'text'} 
                onKeyDown={handleUsernameKeyDown}
            />
            <input 
                onKeyDown={handlePasswordKeyDown}
                ref={passwordRef} 
                name="password" 
                type={'password'}
                placeholder={'Password'}
            />
            <input type={'submit'}/>
        </form>
    </div> );
}

export default Login;