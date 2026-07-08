const fs = require("fs");
const path = require("path");

const file = path.join(__dirname, "../src/data/products.json");
let s = fs.readFileSync(file, "utf8");
s = s.replace(/\u0393\u00c7\u00f6/g, "\u2014").replace(/\u0393\u00c7\u00f4/g, "\u2019");
const products = JSON.parse(s);
products.forEach((p) => {
  if (!p.features?.length && p.tags?.length) {
    p.features = p.tags
      .filter((t) => !["maxretail", "qualifying-swimsuit"].includes(t))
      .slice(0, 5);
  }
  if (p.description) p.description = p.description.replace(/&amp;/g, "&");
});
fs.writeFileSync(file, JSON.stringify(products, null, 2));
console.log("fixed", products.length, "products");
