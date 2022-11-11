import page from "../../node_modules/page/page.mjs";
import { html } from "../../node_modules/lit-html/lit-html.js";
import { loginUser } from "../api-calls.js";
import { changeNav } from "../middlewares/middleware.js";

const loginView = () => html`
    <section id="login">
        <div class="container">
            <form id="login-form" @submit=${loginHandler}>
                <h1>Login</h1>
                <p>Please enter your credentials.</p>
                <hr>
    
                <p>Username</p>
                <input placeholder="Enter Username" name="username" type="text">
    
                <p>Password</p>
                <input type="password" placeholder="Enter Password" name="password">
                <input type="submit" class="registerbtn" value="Login">
            </form>
            <div class="signin">
                <p>Dont have an account?
                    <a href="/register">Sign up</a>.
                </p>
            </div>
        </div>
    </section>
`;

export const renderLogin = (ctx) => {
    ctx.rendering(loginView());
}

function loginHandler(ev) {
    ev.preventDefault();

    const formData = new FormData(ev.currentTarget);
    const username = formData.get('username');
    const password = formData.get('password');
    const data = { username, password };

    loginUser(data)
        .then(user => {
            localStorage.setItem('_id', user._id);
            localStorage.setItem('username', user.username);
            localStorage.setItem('accessToken', user.accessToken);
            page.redirect('/');
            changeNav();
        })
}