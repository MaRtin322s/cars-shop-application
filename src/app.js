import page from "../node_modules/page/page.mjs";
import { renderTemplate } from "./middlewares/middleware.js";
import { renderCreate } from "./views/createView.js";
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
page('/logout', renderHome);
page('/create', renderCreate);
page('/myListings', mylistings);

page.start();