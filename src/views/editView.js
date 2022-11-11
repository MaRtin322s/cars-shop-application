import { html } from "../../node_modules/lit-html/lit-html.js";
import { editListing, getOne } from "../api-calls.js";
import page from "../../node_modules/page/page.mjs";

const editView = (listing) => html`
    <section id="edit-listing">
        <div class="container">
    
            <form id="edit-form" @submit=${editHandler}>
                <h1>Edit Car Listing</h1>
                <p>Please fill in this form to edit an listing.</p>
                <hr>
    
                <p>Car Brand</p>
                <input type="text" placeholder="Enter Car Brand" name="brand" value="${listing.brand}">
    
                <p>Car Model</p>
                <input type="text" placeholder="Enter Car Model" name="model" value="${listing.model}">
    
                <p>Description</p>
                <input type="text" placeholder="Enter Description" name="description" value="${listing.description}">
    
                <p>Car Year</p>
                <input type="number" placeholder="Enter Car Year" name="year" value="${listing.year}">
    
                <p>Car Image</p>
                <input type="text" placeholder="Enter Car Image" name="imageUrl" value="${listing.imageUrl}">
    
                <p>Car Price</p>
                <input type="number" placeholder="Enter Car Price" name="price" value="${listing.price}">
    
                <hr>
                <input type="submit" class="registerbtn" value="Edit Listing">
            </form>
        </div>
    </section>
`;

export const renderEdit = async (ctx) => {
    const listing = await getOne(ctx.params.listingId);
    ctx.rendering(editView(listing));
}

function editHandler(ev) {
    ev.preventDefault();

    const url = new URL(ev.target.action);
    const listId = url.pathname.substring(1, 37);

    const formData = new FormData(ev.currentTarget);
    const brand = formData.get('brand');
    const model = formData.get('model');
    const description = formData.get('description');
    const year = Number(formData.get('year'));
    const imageUrl = formData.get('imageUrl');
    const price = Number(formData.get('price'));
    const data = { brand, model, description, year, imageUrl, price };

    if (brand == '' || model == '' || description == '' || year <= 0 || imageUrl == '' || price <= 0) {
        alert("All fields are required!");
    } else {
        editListing(listId, data)
            .then(() => {
                page.redirect(`/details/${listId}`);
            });
    }
}