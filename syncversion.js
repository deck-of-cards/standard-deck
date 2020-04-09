const fs = require('fs');

const package = require('./package.json');
const distPackage = require('./dist/package.json');

distPackage.version = package.version;

fs.writeFileSync('./dist/package.json', JSON.stringify(distPackage, null, '  '));
