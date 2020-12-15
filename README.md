# Outliers Interquartile Range

Suggets outliers based on Interquartile Range method

The calculated bounds are
```
lower_bound = q25 - k * interquartile_range
upper_bound = q75 + k * interquartile_range
```

Any value outside these bounds is suggested as an outlier.


see https://en.wikipedia.org/wiki/Interquartile_range#Outliers for details

## Installation

```
npm install outliers-interquartile-range
```

## Example

```javascript
const outliersEngine = require('outliers-interquartile-range');

const options = {sorted: false, k: 1.5};

// array_values is 1-D array to be analyzed
const results = outliersEngine.getOutliers(array_values, options);
```

## Documentation

|Option|type|default|description
|------ | ----------- |---|---|
|`sorted`|`boolean`|`false`|The submited `data_array` is already sorted, avoiding costly operation
|`k`     |`number` |`1.5`| Interquartile range multiplier defining the threshold 

## Results

The methos returns an object with the following entries

|Entry|description
|------ | -----------|
|`outliers`| `Object` `upper` & `lower` outliers - see above
|`stats`    |`Object` calculated values `q25`, `q75` & `iqr` (interquartile range) 
|`parameters`    |`Object` the used parameters combining submitted options and defaults

The `upper` & `lower` objects contain

|Entry|description
|------ | -----------|
|`threshold`| `number` The limit for the value being suggested as outlier
|`values`    | `Array` The suggested outlier values
|`indexes`    |`Array` The indexes against submitted `data_array` suggested as outliers

```javascript

results = { 
    'outliers': {
        'upper': {
            'threshold': 64540.095,
            'values': [ 193568.04, 128104.71, 235793.39, 157432.6 ],
            'indexes': [ 11, 36, 43, 82]
        },
        'lower': {
            'threshold': -36329.865,
            'values': [],
            'indexes': []
        }
    },
    'parameters': {
        'sorted': false,
        'k': 1.5
    },
    'stats': {
        'q25': 1496.37,
        'q75': 26713.86,
        'iqr': 25217.49
    }
};

```

## Acknowledgements

The main work (quartiles calculation) is done through the [summary](https://github.com/AndreasMadsen/summary#readme) package.
Many thanks to the author.

## License

MIT
