import { page } from "../node_modules/page/page.mjs";
import { renderTemplate } from "./middlewares/middleware.js";

page(renderTemplate);
page.start();