import { html, nothing } from "../../node_modules/lit-html/lit-html.js";
import { getOne } from "../api-calls.js";
import { isAuth } from "../middlewares/middleware.js";

const detailsView = (listing, userId) => html`
    <section id="listing-details">
        <h1>Details</h1>
        <div class="details-info">
            <img src=${listing.imageUrl}>
            <hr>
            <ul class="listing-props">
                <li><span>Brand:</span>${listing.brand}</li>
                <li><span>Model:</span>${listing.model}</li>
                <li><span>Year:</span>${listing.year}</li>
                <li><span>Price:</span>${listing.price}$</li>
            </ul>
    
            <p class="description-para">${listing.description}</p>
    
            ${isAuth() && listing._ownerId == userId ?
                html`
                <div class="listings-buttons">
                    <a href="${`/${listing._id}/edit`}" class="button-list">Edit</a>
                    <a href=${`/${listing._id}/delete`} class="button-list">Delete</a>
                </div>`
                : nothing
            }
        </div>
    </section>
`;

export const renderdetails = async (ctx) => {
    const listId = ctx.params.listingId;
    const userId = JSON.parse(localStorage.getItem('_id'));
    const listing = await getOne(listId);
    ctx.rendering(detailsView(listing, userId));
}