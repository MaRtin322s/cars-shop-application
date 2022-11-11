import { getToken } from "./middlewares/middleware.js";
import page from "../node_modules/page/page.mjs";

export const registerUser = (userdata) => {
    return fetch('http://localhost:3030/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userdata)
    })
    .then(res => res.json());
}

export const loginUser = (userData) => {
    return fetch('http://localhost:3030/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(res => res.json());
}

export const getAll = () => fetch('http://localhost:3030/data/cars?sortBy=_createdOn%20desc').then(res => res.json());
export const getOne = (listId) => fetch(`http://localhost:3030/data/cars/${listId}`).then(res => res.json());

export const createListing = (data) => {
    return fetch('http://localhost:3030/data/cars', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': getToken()
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json());
}

export const deleteHandler = (ctx) => {
    const listId = ctx.params.listingId;
    fetch(`http://localhost:3030/data/cars/${listId}`, {
        method: 'DELETE',
        headers :{
            'X-Authorization': getToken()
        }
    })
    .then(res => res.json())
    .then(() => {
        page.redirect('/listings')
    });
}

export const editListing = (listId, data) => {
    return fetch(`http://localhost:3030/data/cars/${listId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'X-Authorization': getToken()
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json());
}

export 