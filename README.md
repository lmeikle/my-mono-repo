[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

# my-mono-repo

Trying out monorepo using LernaJS

##### Download and Installation

npm install --g lerna<br>
lerna bootstrap --hoist

##### Testing:

From the root folder 'my-mono-repo'<br>

* npm run test (will run all tests)
* npm run test:simple-loading-spinner
* npm run test:calculate-distance-util

##### Building:

From the root folder 'my-mono-repo'<br>

* npm run build (will run all builds)

##### Publishing:

lerna publish
(automatically runs prepublish in each package first)

##### Useful Links:

https://github.com/lerna/lerna#readme<br>
https://hackernoon.com/one-vs-many-why-we-moved-from-multiple-git-repos-to-a-monorepo-and-how-we-set-it-up-f4abb0cfe469<br>
https://danluu.com/monorepo/<br>
https://github.com/dan-kez/lerna-webpack-example<br>
