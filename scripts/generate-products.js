const fs = require("fs");
const path = require("path");

const rawPath =
  "C:/Users/User/.cursor/projects/e-xampp-htdocs-tanaanaswim/agent-tools/c7bc2ed3-15ba-4f68-842e-2a2a7078f78f.txt";
const outPath = path.join(__dirname, "../src/data/products.json");

const raw = JSON.parse(fs.readFileSync(rawPath, "utf8"));

function getCategory(p) {
  const t = (p.product_type || "").toLowerCase();
  const tags = p.tags.join(" ").toLowerCase();
  const title = p.title.toLowerCase();
  if (t.includes("boys") || title.includes("mini alex")) return "childrens";
  if (
    t.includes("girls") ||
    title.includes("mini trish") ||
    title.includes("finley") ||
    title.includes("esther")
  )
    return "childrens";
  if (
    (tags.includes("women") ||
      title.includes("trish") ||
      title.includes("mataya") ||
      title.includes("kathi")) &&
    !title.includes("mini") &&
    !title.includes("hat") &&
    !title.includes("tote") &&
    !title.includes("bag") &&
    !title.includes("goggle") &&
    !title.includes("cover")
  )
    return "womens";
  if (p.handle.includes("trish") && !p.handle.includes("mini")) return "womens";
  if (p.handle.includes("mataya") || p.handle.includes("kathi")) return "womens";
  return "accessories";
}

function stripHtml(html) {
  return (html || "")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&nbsp;/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

const products = raw.products
  .filter(
    (p) => p.handle !== "e-gift-card" && !p.tags.includes("free-gift-hat")
  )
  .map((p) => {
    const price = parseFloat(p.variants[0]?.price || "0");
    const compareAt = p.variants[0]?.compare_at_price
      ? parseFloat(p.variants[0].compare_at_price)
      : undefined;
    const tags = p.tags;

    const torsoOptions = [];
    const torsoOpt = p.options.find((o) =>
      o.name.toLowerCase().includes("torso")
    );
    if (torsoOpt) {
      torsoOpt.values.forEach((v) => {
        if (v.toLowerCase().includes("long")) torsoOptions.push("long-torso");
        else if (v.toLowerCase().includes("regular"))
          torsoOptions.push("regular-torso");
      });
    }
    if (
      torsoOptions.length === 0 &&
      getCategory(p) === "womens" &&
      (p.title.includes("TRISH") ||
        p.title.includes("MATAYA") ||
        p.title.includes("KATHI"))
    ) {
      torsoOptions.push("long-torso", "regular-torso");
    }
    if (torsoOptions.length === 0) torsoOptions.push("n/a");

    const sizeOpt = p.options.find((o) => o.name.toLowerCase() === "size");
    const sizes = sizeOpt
      ? sizeOpt.values
      : ["One Size"];

    const colorOpt = p.options.find((o) => o.name.toLowerCase() === "color");
    const colors = colorOpt
      ? colorOpt.values.map((name) => ({ name, hex: "#1B3A4B" }))
      : [{ name: "Default", hex: "#1B3A4B" }];

    const desc = stripHtml(p.body_html) || p.title;

    return {
      id: String(p.id),
      slug: p.handle,
      name: p.title,
      category: getCategory(p),
      price,
      compareAtPrice: compareAt,
      description: desc,
      shortDescription: desc.slice(0, 140),
      features: tags
        .filter((t) => !["maxretail", "qualifying-swimsuit"].includes(t))
        .slice(0, 5),
      torsoOptions: [...new Set(torsoOptions)],
      sizes: [...new Set(sizes)].slice(0, 12),
      colors,
      images: p.images
      .map((i) => i.src)
      .filter(
        (src) =>
          !src.toLowerCase().includes(".heic") &&
          !src.toLowerCase().includes(".heif")
      ),
      badge: tags.includes("qualifying-swimsuit")
        ? "Bestseller"
        : tags.some((t) => t.includes("water safety"))
          ? "Safety Color"
          : undefined,
      rating: 4.9,
      reviewCount: 108,
      isBestseller:
        tags.includes("qualifying-swimsuit") || p.title === "THE TRISH",
      isNew: p.title.includes("PINK PUNCH"),
      safetyHighlight: tags.some((t) => t.includes("water safety"))
        ? "High-visibility water safety colors"
        : undefined,
      shopifyUrl: `https://tanaanaswim.com/products/${p.handle}`,
      tags,
    };
  });

fs.writeFileSync(outPath, JSON.stringify(products, null, 2), "utf8");
console.log("Generated", products.length, "products");
