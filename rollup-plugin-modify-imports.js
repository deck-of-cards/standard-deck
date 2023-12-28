const path = require('path');

export default function modifyImports() {
    return {
        name: 'modify-imports',
        resolveId(id, importer) {
            if (id.startsWith('./assets/')) {
                // Replace './assets/' with the appropriate path
                return path.resolve(__dirname, 'src', 'assets', id.slice('./assets/'.length));
            }
            return null;
        },
    };
}
