import page from '../../node_modules/page/page.mjs';
import { html } from "../../node_modules/lit-html/lit-html.js";
import { registerUser } from "../api-calls.js";
import { changeNav } from '../middlewares/middleware.js';

const registerView = () => html`
    <section id="register">
        <div class="container">
            <form id="register-form" @submit=${registerHandler}>
                <h1>Register</h1>
                <p>Please fill in this form to create an account.</p>
                <hr>
    
                <p>Username</p>
                <input type="text" placeholder="Enter Username" name="username" required>
    
                <p>Password</p>
                <input type="password" placeholder="Enter Password" name="password" required>
    
                <p>Repeat Password</p>
                <input type="password" placeholder="Repeat Password" name="repeatPass" required>
                <hr>
    
                <input type="submit" class="registerbtn" value="Register">
            </form>
            <div class="signin">
                <p>Already have an account?
                    <a href="/login">Sign in</a>.
                </p>
            </div>
        </div>
    </section>
`;

export const renderRegister = (ctx) => {
    ctx.rendering(registerView());
}

function registerHandler(ev) {
    ev.preventDefault();

    const formData = new FormData(ev.currentTarget);
    const username = formData.get('username');
    const password = formData.get('password');
    const rePass = formData.get('repeatPass');
    const data = { username, password };

    if (username == '' || password == '' || rePass == '') {
        alert("All fields are required!")
    } else {
        registerUser(data)
            .then(user => {
                localStorage.setItem('_id', JSON.stringify(user._id));
                localStorage.setItem('username', JSON.stringify(user.username));
                localStorage.setItem('accessToken', JSON.stringify(user.accessToken));
                const username = document.getElementById('username');
                username.textContent = `Welcome ${user.username}`;
                page.redirect('/listings');
                changeNav();
            });
    }
}