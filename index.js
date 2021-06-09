const fs = require('fs');
const path = require('path');

module.exports = {
  options: {
    alias: 'openGraph',
  },
  bundle: {
    directory: 'modules',
    modules: getBundleModuleNames()
  },
  init(self) {
    self.apos.template.append('head', '@apostrophecms/open-graph:tags');
    if (!self.apos.baseUrl) {
      self.apos.util.warnDevOnce(
        'aposOgBaseUrl',
        '⚠️ You do not have the `baseUrl` value set for this application. The Open Graph image will not work correctly without this set.'
      );
    }
  },
  components(self) {
    return {
      async tags(req, data) {},
    };
  }
};

function getBundleModuleNames() {
  const source = path.join(__dirname, './modules/@apostrophecms');
  return fs
    .readdirSync(source, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => `@apostrophecms/${dirent.name}`);
}
