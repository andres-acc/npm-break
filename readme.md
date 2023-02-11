# npm - wolox break

## Description
This is a repo based on a break about npm.

## Steps to replicate the project
1. initialize the npm project
  > npm init

  package.json
  ```json
    {
      "name": "number-helpers-wolox",
      "version": "1.0.0",
      "description": "Get information about an array of numbers",
      "main": "build/index.js",
      "scripts": {
        "test": "echo \"Error: no test specified\" && exit 1"
      },
      "keywords": [
        "numbers",
        "array",
        "helpers",
        "wolox"
      ],
      "author": "Andres Alcaraz",
      "license": "ISC"
    }
  ```

  [commit](https://github.com/andres-acc/npm-break/commit/1de8516772e53f13acf6b308e5498ff634f45731)

2. Add libraries and typescript configuration

  > npm i  babel-cli babel-preset-latest @babel/preset-env @types/babel__preset-env jest @types/jest watch @babel/preset-typescript --save-dev

  > tsc --init

  Create file `.babelrc`
  ```json
    {
      "presets": [
        "@babel/preset-typescript",
        ["@babel/preset-env"]
      ]
    }
  ```

  [commit](https://github.com/andres-acc/npm-break/commit/c34f1b4c815dfa0d52d686c51a9b3c2a5640968e)
  
3. Add functionality

  [commit](https://github.com/andres-acc/npm-break/commit/fdec0eca551311e6045c9602a3f2104d3a7d5f1a)

4. Publish package
    
  Add .npmignore
  ```
    src
  ```

   > npm adduser
   > npm publish

That's it, now you could install your package in any other project you want.

By [Andres Alcaraz](https://andres-alcaraz.netlify.app/)
