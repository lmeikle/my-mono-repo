calculate-distance-util

Given a set of 4 coordinates calculates the distance in KM between them.

## Example:

```javascript
import calculateDistance from '@lmeikle/calculate-distance-util';

let distance = calculateDistance(a, b, c, d);
```

## Commands

#### Building

The build is uglified to `dist/calculate-distance-util.min.js`, Sourcemaps are generated

    1. npm run build

To publish:

    1. npm run prepublish
    2. npm publish --access public

#### Running Locally

    1. npm run start

## Bundle Sizes

| Type     | Size        |
| -------- | ----------- |
| Minified | `514 bytes` |
