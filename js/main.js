import app from "./app.js";

const page = document.getElementById('root').getAttribute('page-name');
document.getElementById('root').innerHTML = app(page);