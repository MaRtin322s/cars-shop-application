import { html } from "../../node_modules/lit-html/lit-html.js";
import { createListing } from "../api-calls.js";
import page from "../../node_modules/page/page.mjs";

const createView = () => html`
    <section id="create-listing">
        <div class="container">
            <form id="create-form" @submit=${createHandler}>
                <h1>Create Car Listing</h1>
                <p>Please fill in this form to create an listing.</p>
                <hr>
    
                <p>Car Brand</p>
                <input type="text" placeholder="Enter Car Brand" name="brand">
    
                <p>Car Model</p>
                <input type="text" placeholder="Enter Car Model" name="model">
    
                <p>Description</p>
                <input type="text" placeholder="Enter Description" name="description">
    
                <p>Car Year</p>
                <input type="number" placeholder="Enter Car Year" name="year">
    
                <p>Car Image</p>
                <input type="text" placeholder="Enter Car Image" name="imageUrl">
    
                <p>Car Price</p>
                <input type="number" placeholder="Enter Car Price" name="price">
    
                <hr>
                <input type="submit" class="registerbtn" value="Create Listing">
            </form>
        </div>
    </section>
`;

export const renderCreate = (ctx) => {
    ctx.rendering(createView());
}

function createHandler(ev) {
    ev.preventDefault();

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
        createListing(data)
            .then(listing => {
                console.log(listing);
                page.redirect('/listings');
            });
    }
}