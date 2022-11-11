import { html } from "../../node_modules/lit-html/lit-html.js";

const listingsView = () => html`
    <section id="car-listings">
        <h1>Car Listings</h1>
        <div class="listings">
    
            <!-- Display all records -->
            <div class="listing">
                <div class="preview">
                    <img src="../../public/images/audia3.jpg">
                </div>
                <h2>Audi A3</h2>
                <div class="info">
                    <div class="data-info">
                        <h3>Year: 2018</h3>
                        <h3>Price: 25000 $</h3>
                    </div>
                    <div class="data-buttons">
                        <a href="" class="button-carDetails">Details</a>
                    </div>
                </div>
            </div>
    
            <div class="listing">
                <div class="preview">
                    <img src="../../public/images/benz.jpg">
                </div>
                <h2>Mercedes A-class</h2>
                <div class="info">
                    <div class="data-info">
                        <h3>Year: 2016</h3>
                        <h3>Price: 27000 $</h3>
                    </div>
                    <div class="data-buttons">
                        <a href="" class="button-carDetails">Details</a>
                    </div>
                </div>
            </div>
    
            <div class="listing">
                <div class="preview">
                    <img src="../../public/images/bmw.jpg">
                </div>
                <h2>BMW 3 series</h2>
                <div class="info">
                    <div class="data-info">
                        <h3>Year: 2016</h3>
                        <h3>Price: 22000 $</h3>
                    </div>
                    <div class="data-buttons">
                        <a href="" class="button-carDetails">Details</a>
                    </div>
                </div>
            </div>
    
            <!-- Display if there are no records -->
            <p class="no-cars">No cars in database.</p>
        </div>
    </section>
`;

export const renderListings = (ctx) => {
    ctx.rendering(listingsView());
}