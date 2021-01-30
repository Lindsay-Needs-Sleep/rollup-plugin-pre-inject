const path = require('path');
const preInject = require('../index.js');

const addFiveFile = path.resolve(__dirname, './src/addFive.js');
const addTenFile = path.resolve(__dirname, './src/logAddFiveAndOne.js');

export default {
    input: addTenFile,
    output: {
      format: 'umd',
      name: 'result',
      file: 'out/bundle.js',
    },
    plugins: [
        preInject({
            injectCode: `import addFive from '${preInject.utils.getJsFriendlyPath(addFiveFile)}';\n`,
        }),
    ],
}
