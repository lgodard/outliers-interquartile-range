
'use strict';

const summary = require('summary');

const DEFAULT_OPTIONS = {
    sorted: false,
    k: 1.5
};

function getOutliers(data_array, options) {

    const parameters = Object.assign({}, DEFAULT_OPTIONS, options);

    const engine = summary(data_array, parameters.sorted);

    const q25 = engine.quartile(0.25);
    const q75 = engine.quartile(0.75);

    const iqr = q75 - q25;

    const outliers = {
        upper: {
            threshold: 0,
            values: [],
            indexes: [],
        },
        lower: {
            threshold: 0,
            values: [],
            indexes: [],
        }
    };

    outliers.lower.threshold = q25 - parameters.k * iqr;
    outliers.upper.threshold = q75 + parameters.k * iqr;

    data_array.forEach((item, index) => {

        if (item <= outliers.lower.threshold) {
            outliers.lower.values.push(item);
            outliers.lower.indexes.push(index);

        } else if (item >= outliers.upper.threshold) {
            outliers.upper.values.push(item);
            outliers.upper.indexes.push(index);
        }
    });

    return {
        outliers,
        parameters,
        stats: {
            q25,
            q75,
            iqr
        }
    };

}

module.exports = {
    getOutliers,
    DEFAULT_OPTIONS
};
