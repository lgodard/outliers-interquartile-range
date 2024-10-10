
const outliersEngine = require('../../src/index');
const sample = require('../data/sample');

describe('Options validation', () => {

    it('use defaults', () => {
        const results = outliersEngine.getOutliers(sample.data, sample.expected.parameters);
        results.parameters.should.deepEqual(outliersEngine.DEFAULT_OPTIONS);
    });

    it('takes options', () => {
        const options = Object.assign({}, sample.expected.parameters);
        options.k = 5;

        const results = outliersEngine.getOutliers(sample.data, options);
        results.parameters.should.not.deepEqual(outliersEngine.DEFAULT_OPTIONS);

        results.parameters.k.should.equal(options.k);

        Object.keys(outliersEngine.DEFAULT_OPTIONS).forEach((key) => {
            if (key != 'k') {
                results.parameters[key].should.equal(outliersEngine.DEFAULT_OPTIONS[key]);
            }
        });

    });

});
