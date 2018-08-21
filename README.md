[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)

# my-mono-repo

Trying out monorepo using LernaJS

The root package.json, at the very least, is how you install lerna locally during a CI build. You should also put there your testing, linting and similar tasks there to run them from root as running them separately from each package is slower.
The root can also hold all the “hoisted” packages, which speeds up bootstrapping when using the --hoist flag.

##### Download and Installation:

* npm install --g lerna<br>
* lerna bootstrap --hoist

##### Linking local packages:

* lerna add @lmeikle/calculate-distance-util --scope=my-tiny-app (gets from npm as it exists there)
* lerna add apple --scope=my-tiny-app (just links to local package)

##### Testing:

From the root folder 'my-mono-repo'<br>

* npm run test (will run all tests)
* npm run test:simple-loading-spinner
* npm run test:calculate-distance-util

##### Building:

From the root folder 'my-mono-repo'<br>

* npm run build (will run all builds)

##### Publishing:

* lerna publish (will automatically run prepublish in each package first)

##### Useful Links:

https://github.com/lerna/lerna#readme<br>
https://hackernoon.com/one-vs-many-why-we-moved-from-multiple-git-repos-to-a-monorepo-and-how-we-set-it-up-f4abb0cfe469<br>
https://danluu.com/monorepo/<br>
https://github.com/dan-kez/lerna-webpack-example<br>
https://codeburst.io/monorepos-by-example-part-2-4153712cfa31<br>
https://github.com/larkintuckerllc/hello-monorepo/tree/master/packages/grocery<br>
