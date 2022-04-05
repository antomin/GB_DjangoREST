import React from "react";

const Login = () => {
    return (
        <div className="text-center">
            <div className="form-signin col-3 m-auto">
                <form>
                    <h1 className="h3 mb-3 fw-normal">Вход</h1>
                    <div className="form-floating">
                        <input type="login" className="form-control" id="floatingInput" placeholder="login"/>
                        <label htmlFor="floatingInput">Login</label>
                    </div>
                    <div className="form-floating">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <button className="w-100 btn btn-lg btn-dark mt-3" type="submit">Sign in</button>
                </form>
            </div>
        </div>
    );
};

export default Login;