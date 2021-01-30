const MagicString = require('magic-string');

const preInject = ({
  sourceMap = true,
  injectCode = null,
} = {}) => ({
  name: 'pre-inject',
  transform: function(source, id) {
    // Do nothing if nothing to inject
    if(!injectCode) return null;

    // polyfills should go only on the top most files
    // so we only apply this transform to entries
    if (!this.getModuleInfo(id).isEntry) return null;

    // create a new magic-string object to prepend our injectCode to
    const magicString = new MagicString(source);
    magicString.prepend(injectCode);

    return {
      code: magicString.toString(),
      map: sourceMap ? magicString.generateMap() : null,
    }
  }
});

// Add the utils to the export
preInject.utils = require('./utils.js');

module.exports = preInject;
