import { html } from "../../node_modules/lit-html/lit-html.js";
import { getAll } from "../api-calls.js";

const listingView = (listing) => html`
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
                <a href=${'/details/' + listing._id} class="button-carDetails">Details</a>
            </div>
        </div>
    </div>
`;

const listingsView = (allListings) => html`
    <section id="car-listings">
        <h1>Car Listings</h1>
        <div class="listings">
            ${allListings.length > 0 ?
                allListings.map(listing => listingView(listing))
                : html`<p class="no-cars">No cars in database.</p>`
            }
        </div>
    </section>
`;

export const renderListings = async (ctx) => {
    const allListings = await getAll();
    ctx.rendering(listingsView(allListings));
}