import "dotenv/config";

console.log(process.env);

const Webflow = require("webflow-api");

// // Initialize the API
const api = new Webflow({ token: process.env.WEBFLOW_API_ACCESS_TOKEN });

// // Fetch a site
api
  .site({ siteId: process.env.WEBFLOW_SITE_ID })
  .then((site: any) => console.log(site));
