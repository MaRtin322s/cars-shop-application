import page from "../node_modules/page/page.mjs";
import { deleteHandler } from "./api-calls.js";
import { changeNav, getToken, renderTemplate } from "./middlewares/middleware.js";
import { renderCreate } from "./views/createView.js";
import { renderdetails } from "./views/detailsView.js";
import { renderEdit } from "./views/editView.js";
import { renderHome } from "./views/homeView.js";
import { renderListings } from "./views/listingsView.js";
import { renderLogin } from "./views/loginView.js";
import { mylistings } from "./views/myListingsView.js";
import { renderRegister } from "./views/registerView.js";
import { renderSearch } from "./views/searchView.js";

page(renderTemplate);
page('/', renderHome);
page('/listings', renderListings);
page('/year', renderSearch);
page('/login', renderLogin);
page('/register', renderRegister);
page('/logout', logout);
page('/create', renderCreate);
page('/myListings', mylistings);
page('/details/:listingId', renderdetails);
page('/:listingId/delete', deleteHandler);
page('/:listingId/edit', renderEdit);

page.start();

changeNav();

function logout() {
    fetch('http://localhost:3030/users/logout', {
        method: 'GET',
        headers: {
            'X-Authorization': getToken()
        }
    })
    .then(() => {
        localStorage.clear();
        page.redirect('/');
        changeNav();
    });
}