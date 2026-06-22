#!/usr/bin/env node
/* eslint-disable */
const fs = require('fs');
const path = require('path');
const https = require('https');

const FEED_URL = 'https://medium.com/feed/@joelmachado649';
const OUT_PATH = path.join(__dirname, '..', 'src', 'data', 'posts.json');

function fetchText(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (portfolio-build)' } }, (res) => {
        if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
          return fetchText(res.headers.location).then(resolve, reject);
        }
        if (res.statusCode !== 200) {
          return reject(new Error(`Fetch ${url} failed: ${res.statusCode}`));
        }
        let data = '';
        res.setEncoding('utf8');
        res.on('data', (c) => (data += c));
        res.on('end', () => resolve(data));
      })
      .on('error', reject);
  });
}

function unwrapCdata(s) {
  if (!s) return '';
  const m = s.match(/<!\[CDATA\[([\s\S]*?)\]\]>/);
  return m ? m[1] : s;
}

function decodeEntities(s) {
  return s
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&nbsp;/g, ' ');
}

function stripTags(html) {
  return decodeEntities(html.replace(/<[^>]+>/g, '')).replace(/\s+/g, ' ').trim();
}

function deriveSlug(link) {
  try {
    const u = new URL(link);
    const last = u.pathname.split('/').filter(Boolean).pop() || '';
    const stripped = last.replace(/-[a-f0-9]{8,16}$/i, '');
    return stripped || last;
  } catch (e) {
    return link;
  }
}

function getTag(block, tag) {
  const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'i');
  const m = block.match(re);
  return m ? m[1].trim() : '';
}

function getAllTags(block, tag) {
  const re = new RegExp(`<${tag}[^>]*>([\\s\\S]*?)<\\/${tag}>`, 'gi');
  const out = [];
  let m;
  while ((m = re.exec(block)) !== null) out.push(m[1].trim());
  return out;
}

function parseItems(xml) {
  const items = [];
  const re = /<item>([\s\S]*?)<\/item>/g;
  let m;
  while ((m = re.exec(xml)) !== null) {
    const block = m[1];
    const title = decodeEntities(unwrapCdata(getTag(block, 'title')));
    const linkRaw = getTag(block, 'link');
    const link = linkRaw.split('?')[0];
    const pubDate = getTag(block, 'pubDate');
    const contentEncoded = unwrapCdata(getTag(block, 'content:encoded'));
    const categories = getAllTags(block, 'category').map((c) =>
      decodeEntities(unwrapCdata(c))
    );

    const slug = deriveSlug(link);
    const date = new Date(pubDate);
    const dateLabel = isNaN(date)
      ? pubDate
      : date.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
        });

    const excerpt = stripTags(contentEncoded).slice(0, 220).trim();
    const publication = link.includes('/coinsbench/') || link.includes('coinsbench.com')
      ? 'CoinsBench'
      : 'Medium';

    items.push({
      slug,
      title,
      url: link,
      date: dateLabel,
      isoDate: isNaN(date) ? null : date.toISOString(),
      publication,
      excerpt,
      tags: categories.slice(0, 6),
      html: contentEncoded,
    });
  }

  items.sort((a, b) => {
    if (!a.isoDate) return 1;
    if (!b.isoDate) return -1;
    return b.isoDate.localeCompare(a.isoDate);
  });

  return items;
}

async function main() {
  console.log(`Fetching ${FEED_URL} ...`);
  const xml = await fetchText(FEED_URL);
  const items = parseItems(xml);
  if (!items.length) {
    throw new Error('No items parsed from RSS feed');
  }
  fs.writeFileSync(OUT_PATH, JSON.stringify(items, null, 2));
  console.log(`Wrote ${items.length} posts to ${path.relative(process.cwd(), OUT_PATH)}`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
