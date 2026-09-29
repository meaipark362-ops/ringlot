const fs = require('fs');
const html = fs.readFileSync('지미나이 본.html', 'utf8');
const lines = html.split('\n');

console.log('=== ENDING SLIDE HTML ===');
for (let i = 2772; i < 2808; i++) {
  console.log(`${i + 1}: ${lines[i]}`);
}

console.log('=== ENDING SLIDE CSS ===');
for (let i = 1905; i < 2080; i++) {
  console.log(`${i + 1}: ${lines[i]}`);
}
