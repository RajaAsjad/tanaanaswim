fetch("https://tanaanaswim.com/blogs/water-saftey")
  .then((r) => r.text())
  .then((h) => {
    const og = h.match(/property="og:image"\s+content="([^"]+)"/);
    console.log("blog og:", og?.[1]);
  });

fetch("https://images.unsplash.com/photo-1505118380757-91f5eb962245?w=1600&q=80", {
  method: "HEAD",
}).then((r) => console.log("unsplash status:", r.status));

const testUrls = [
  "https://tanaanaswim.com/cdn/shop/articles/april_2026_blog.png?v=1775922376",
  "https://cdn.shopify.com/s/files/1/0742/4330/9803/files/little_girls_water_safety_color_swimsuit_biker_shorts_and_long_sleeve_top_pink_punch.jpg?v=1758555676",
  "https://cdn.shopify.com/s/files/1/0742/4330/9803/collections/MAT_6963_1.jpg?v=1781467357",
];
Promise.all(
  testUrls.map(async (u) => {
    const r = await fetch(u, { method: "HEAD" });
    console.log(r.status, u.slice(-60));
  })
);
