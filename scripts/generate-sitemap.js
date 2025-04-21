import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'node:fs';
import { writeFile } from 'node:fs/promises';
import { Readable } from 'node:stream';

const hostname = 'https://zapsapce.in';

const routes = ['/', '/about', '/services', '/gallery'];

// Optionally include dynamic project pages
const projectSlugs = ['interior-1', 'kitchen-makeover', 'office-space'];
const allRoutes = [...routes, ...projectSlugs.map(slug => `/projects/${slug}`)];

const sitemapStream = new SitemapStream({ hostname });
const xmlStream = Readable.from(allRoutes.map(url => ({ url }))).pipe(sitemapStream);

const xml = await streamToPromise(xmlStream).then(data => data.toString());

await writeFile('./dist/sitemap.xml', xml);
console.log('✅ Sitemap generated at dist/sitemap.xml');
