const path = require('path');

module.exports = {
    /**
     * Mostly just a hack for windows.
     * path on windows produces backslashes which are a problem in js files.
     * @param {string} filePath
     */
    getJsFriendlyPath: (filePath) => {
        return filePath.split(path.sep).join(path.posix.sep);
    },
}
