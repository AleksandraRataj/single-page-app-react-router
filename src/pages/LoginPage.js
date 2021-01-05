import React from 'react';

const LoginPage = () => {
    return(
        <div className="login_admin">
            <label htmlFor="">Login
                <input type="text"/>
            </label>
            <label htmlFor="">Password
                <input type="text"/>
            </label>
            <button>Sing in</button>
        </div>
    );
}

export default LoginPage;