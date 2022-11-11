import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAll, getMyListings } from "../api-calls.js";


const listingTemplate = (listing) => html`
    <div class="listing">
        <div class="preview">
            <img src=${listing.imageUrl}>
        </div>
        <h2>${listing.brand} ${listing.model}</h2>
        <div class="info">
            <div class="data-info">
                <h3>Year: ${listing.year}</h3>
                <h3>Price: ${listing.price} $</h3>
            </div>
            <div class="data-buttons">
                <a href=${`/details/${listing._id}`} class="button-carDetails">Details</a>
            </div>
        </div>
    </div>
`;

const myListingsView = (myListings, userId) => html`
    <section id="my-listings">
        <h1>My car listings</h1>
        <div class="listings">
            ${myListings.length > 0 ?
                myListings.map(listing => listingTemplate(listing))
                : html`<p class="no-cars"> You haven't listed any cars yet</p>`
            }
        </div>
    </section>
`;

export const mylistings = async (ctx) => {
    const userId = JSON.parse(localStorage.getItem('_id'));
    const myListings = await getMyListings(userId);
    ctx.rendering(myListingsView(myListings, userId));
}