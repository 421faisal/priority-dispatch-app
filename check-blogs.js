const fs = require('fs');
const path = require('path');

const blogDir = path.join(__dirname, 'app', 'blog');
const dirs = fs.readdirSync(blogDir).filter(d => fs.statSync(path.join(blogDir, d)).isDirectory());

const stats = [];

dirs.forEach(d => {
  const filePath = path.join(blogDir, d, 'page.tsx');
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf8');
    const stripped = content.replace(/<[^>]*>?/gm, ' ');
    const words = stripped.split(/\s+/).filter(w => w.length > 0);
    stats.push({ slug: d, words: words.length });
  }
});

fs.writeFileSync('blog_stats.json', JSON.stringify(stats.sort((a,b) => a.words - b.words), null, 2));
console.log('Done writing blog_stats.json');
