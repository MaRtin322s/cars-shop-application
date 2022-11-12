import { html } from "../../node_modules/lit-html/lit-html.js";
import { searchListings } from "../api-calls.js";

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
            <a href=${`/details/${listing._id}`} class="button-carDetails">Details</a>
        </div>
    </div>
</div>
`;

const searchView = (onSearch, cars) => html`
    <section id="search-cars">
        <h1>Filter by year</h1>
    
        <div class="container">
            <input id="search-input" type="text" name="search" placeholder="Enter desired production year">
            <button @click=${onSearch} class="button-list">Search</button>
        </div>
    
        <h2>Results:</h2>
        <div class="listings">
        ${cars 
            ? cars.length > 0 
                ? cars.map(car => listingView(car)) 
                : html`<p class="no-cars"> No results.</p>` 
            : null}
        </div>
    </section>
`;

export const renderSearch = async (ctx) => {
    ctx.rendering(searchView(onSearch));

    async function onSearch() {
        let year = document.getElementById('search-input')

        try {
            if(!year.value || isNaN(year.value)) {
                alert('Enter valid year!');
            }

            const cars = await searchListings(year.value);
            console.log(cars);

            ctx.rendering(searchView(onSearch, cars))
            year.value=""
        } catch (err) {
            ctx.rendering(searchView(onSearch))
            year.value=""
            alert(err.message)
        }
        

    }
}