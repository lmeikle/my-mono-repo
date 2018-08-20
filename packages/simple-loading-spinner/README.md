simple-loading-spinner

Renders a simple react loading spinner using Webpack 4.<br/>
Based on: https://www.npmjs.com/package/react-webpack-component

## Example:

```javascript
import React, { Component } from 'react';
import { LoadingComponent } from '@lmeikle/simple-loading-component';

class HelloWorld extends Component {
  render() {
    return <LoadingComponent />;
  }
}
export default HelloWorld;
```

## Commands

#### Building

Compile in mode production:

    1. npm run build

To publish:

    1. npm run prepublish
    2. npm publish --access public

#### Running Locally (Watch changes in mode development)

    1. npm run start

#### Testing (using Jest with Enyzme)

      1. npm run test

#### Structure

    <pre>
    |-- dist (Compiled)
    |   `-- index.js
    |-- src
    |   |-- loading
    |   `-- index.js
    `-- webpack.config.js
    </pre>
