const fs = require('fs');
const { SitemapStream, streamToPromise } = require('sitemap');
const { createWriteStream } = require('fs');

const sitemap = new SitemapStream({ hostname: 'https://zapsapce.in' });
const writeStream = createWriteStream('./dist/sitemap.xml');

const staticRoutes = ['/', '/about', '/services', '/gallery'];

// Add static routes
staticRoutes.forEach((url) => {
  sitemap.write({ url, changefreq: 'monthly', priority: 0.8 });
});

// Optional: Add known dynamic project pages
const projectIds = ['interior-1', 'kitchen-makeover', 'office-space']; // Replace with your real slugs
projectIds.forEach((id) => {
  sitemap.write({ url: `/projects/${id}`, changefreq: 'monthly', priority: 0.6 });
});

sitemap.end();

streamToPromise(sitemap).then((data) => {
  fs.writeFileSync('./dist/sitemap.xml', data.toString());
  console.log('✅ Sitemap successfully generated at dist/sitemap.xml');
});
