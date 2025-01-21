const fs = require('fs');
const archiver = require('archiver');

const output = fs.createWriteStream('build.zip');
const archive = archiver('zip', {
  zlib: { level: 9 }
});

output.on('close', () => {
  console.log(`Build complete: ${archive.pointer()} total bytes`);
});

archive.pipe(output);
archive.directory('src/', 'src');
archive.file('server.js', { name: 'server.js' });
archive.finalize();
