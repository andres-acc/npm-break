# npm - wolox break

## Description
This is a repo based on a break about npm.

## Steps to replicate the project
1. initialize the npm project
  > npm init (inside of a folder)

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

  UPDATE MAIN PATH

  [commit](https://github.com/andres-acc/npm-break/commit/1de8516772e53f13acf6b308e5498ff634f45731)

2. Add libraries and typescript configuration

  > npm i babel-cli babel-preset-latest @babel/preset-env @types/babel__preset-env jest @types/jest watch @babel/preset-typescript --save-dev

  > tsc --init

  config tsconfig.json:
  ```
    "rootDir": "./src",
    "moduleResolution": "node",       
    "outDir": "./build",
  ```

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

3. Add base file

  In src/index.ts
    ```
      console.log('Hello Wolox');
    ```
  
  > node src/index.ts

4. Add base scripts

  ```
    "test": "jest",
    "build": "tsc -p tsconfig.json",
    "dev": "watch 'npm run build' src",
    "test:watch": "npm test -- --watch"
  ```
  
5. Add functionality

  [commit](https://github.com/andres-acc/npm-break/commit/fdec0eca551311e6045c9602a3f2104d3a7d5f1a)

6. Test locally

  a. Create new empty project
  b. From the package run
    > npm link
  c. From the new project run:
    > npm link name-of-package
  d. test functionality

7. Publish package
    
  Add .npmignore
  ```
    src
  ```

   > npm adduser
   > npm publish

That's it, now you could install your package in any other project you want.

By [Andres Alcaraz](https://andres-alcaraz.netlify.app/)
