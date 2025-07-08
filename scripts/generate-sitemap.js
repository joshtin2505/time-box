import fs from "fs";
import path from "path";

const generateSitemap = () => {
  const baseUrl = "https://time-box-planner.vercel.app";
  const currentDate = new Date().toISOString();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>${baseUrl}</loc>
    <lastmod>${currentDate}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>1.0</priority>
  </url>
</urlset>`;

  fs.writeFileSync(path.join(process.cwd(), "public", "sitemap.xml"), sitemap);
  console.log("✅ Sitemap generado exitosamente");
};

generateSitemap();
