const path = require('path');
const preInject = require('../../index.js');
const { rollup } = require('rollup');

const addFiveFile = path.resolve(__dirname, '../data/addFive.js');
const addTenFile = path.resolve(__dirname, '../data/addTen.js');

describe('rollup', () => {
    describe('rollup and createInputFile', () => {
        const outDir = path.resolve(__dirname, '../out/');
        let outFileNum = 0;

        async function runRollup(options) {
            const outFile = path.resolve(outDir, 'bundle_' + outFileNum + '.js');
            outFileNum++;
            const bundle = await rollup(options);
            // Write the bundle to disk
            const handle = await bundle.write({
                format: 'umd',
                name: 'result',
                file: outFile,
            });
            return require(outFile);
        }
        it(`addFive rollup output should be runnable`, async () => {
            const addFive = await runRollup({
                input: addFiveFile,
            });
            expect(addFive(1)).toEqual(6);
        });
        it(`using the plugin shouldn't mess up addFive`, async () => {
            const addFive = await runRollup({
                input: addFiveFile,
                plugins: [
                    preInject(),
                ]
            });
            expect(addFive(1)).toEqual(6);
        });
        it(`addTen rollup output should throw`, async () => {
            const addTen = await runRollup({
                input: addTenFile,
            });
            let error;
            try {
                addTen(1);
            } catch (e) {
                error = e;
            }
            expect(error.message).toMatch('addFive is not');
        });
        it(`addTen should succeed if we add code to import addFive`, async () => {
            const addTen = await runRollup({
                input: addTenFile,
                plugins: [
                    preInject({
                        injectCode: `import addFive from '${preInject.utils.getJsFriendlyPath(addFiveFile)}';\n`,
                    }),
                ]
            });
            expect(addTen(1)).toEqual(11);
        });
    });
});
