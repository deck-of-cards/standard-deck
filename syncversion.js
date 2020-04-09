const fs = require('fs');

const pkg = require('./package.json');
const distPkg = require('./dist/package.json');

distPkg.version = pkg.version;

fs.writeFileSync('./dist/package.json', JSON.stringify(distPkg, null, '  '));
