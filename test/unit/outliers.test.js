
'use strict';

require('should');

const outliersEngine = require('../../src/index');
const sample = require('../data/sample');

describe('Outliers', () => {

    it('calculates', () => {

        const results = outliersEngine.getOutliers(sample.data, sample.expected.parameters);

        results.should.have.properties(Object.keys(sample.expected));
        results.outliers.should.have.properties(Object.keys(sample.expected.outliers));
        results.parameters.should.have.properties(Object.keys(sample.expected.parameters));
        results.stats.should.have.properties(Object.keys(sample.expected.stats));

        results.outliers.lower.should.have.properties(Object.keys(sample.expected.outliers.lower));
        results.outliers.upper.should.have.properties(Object.keys(sample.expected.outliers.upper));

        results.outliers.lower.indexes.should.be.Array();
        results.outliers.lower.values.should.be.Array();
        results.outliers.upper.indexes.should.be.Array();
        results.outliers.upper.values.should.be.Array();

        results.outliers.lower.indexes.should.deepEqual(sample.expected.outliers.lower.indexes);
        results.outliers.lower.values.should.deepEqual(sample.expected.outliers.lower.values);
        results.outliers.upper.indexes.should.deepEqual(sample.expected.outliers.upper.indexes);
        results.outliers.upper.values.should.deepEqual(sample.expected.outliers.upper.values);

    });

});

