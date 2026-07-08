const urls = [
  "https://tanaanaswim.com/blogs/water-saftey/water-safety-for-kids-before-summer",
  "https://tanaanaswim.com/blogs/water-saftey/cold-water-safety-spring-lake-safety",
  "https://tanaanaswim.com/blogs/water-saftey/rip-current-safety-101-how-to-spot-one-and-what-to-do-if-youre-caught",
];

(async () => {
  for (const u of urls) {
    const r = await fetch(u);
    const h = await r.text();
    const og = h.match(/property="og:image"\s+content="([^"]+)"/);
    console.log(u.split("/").pop(), "=>", og?.[1] || "NOT FOUND");
  }
})();
