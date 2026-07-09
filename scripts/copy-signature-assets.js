const fs = require('fs');
const path = require('path');

const sourceDir = path.join(__dirname, '..', 'assets', 'signatures', 'clients');
const targetDir = path.join(__dirname, '..', 'public', 'clients');

const copyRecursive = (src, dest) => {
  if (!fs.existsSync(src)) {
    return;
  }

  fs.mkdirSync(dest, { recursive: true });

  fs.readdirSync(src, { withFileTypes: true }).forEach((entry) => {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);

    if (entry.isDirectory()) {
      copyRecursive(srcPath, destPath);
      return;
    }

    fs.copyFileSync(srcPath, destPath);
  });
};

if (!fs.existsSync(sourceDir)) {
  console.log('No assets/signatures/clients directory found — skipping asset copy.');
  process.exit(0);
}

copyRecursive(sourceDir, targetDir);
console.log(`Copied signature assets to ${targetDir}`);
