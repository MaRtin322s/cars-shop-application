import { render } from "../../node_modules/lit-html/lit-html.js";

const mainContent = document.getElementById('site-content');

function renderContent(template) {
    render(template, mainContent);
}

export const renderTemplate = (ctx, next) => {
    ctx.rendering = renderContent;
    next();
}

export const isAuth = () => {
    const serializedUser = localStorage.getItem('username');

    if (serializedUser) {
        return true;
    } else {
        return false;
    }
}

export function changeNav() {

    const userView = document.querySelectorAll(".user");
    const guestView = document.querySelectorAll(".guest");

    if (isAuth()) {
        userView.forEach(x => x.style.display = "inline");
        guestView.forEach(x => x.style.display = "none");
    } else {
        userView.forEach(x => x.style.display = "none");
        guestView.forEach(x => x.style.display = "inline");
    }
}

export function getToken() {
    const accessToken = JSON.parse(localStorage.getItem('accessToken'));
    return accessToken;
}