# Template for React apps

As a beginner react developer you can start off with a create-react-app for your projects. If you eject the configs would be messy.
And as you move to more professional projects, you need a better environment with nice tool belt that is custom configurable.

This project serves as a good start for pet projects.

## Added Features

1. JavaScript

   - supports latest Javascript + TypeScript
   - Babel packages to transpile code to ES5 for wider browser support

     - @babel/core is the Babel compiler core.
     - @babel/preset-env is a preset that allows you to use the latest JavaScript without needing to worry about what transformations/polyfills are needed for browser support.
     - @babel/preset-react is a wrapper around several transformations that enable JSX support and more.

2. React - Core features only

   - react, react-dom, react-hot-loader, react-router, react-router-dom

3. Webpack
   - Compile ES6+ code using Babel and TypeScript
   - Cross-env support for ENV variables
   - Clean up the dist folder automatically before each build
   - Cache busting bundled files in Production builds
   - Dev Server for development
   - Hot Module Loading for React
   - Support for SCSS and SCSS modules
   - Support for image processing

## To do - add additional features

- Add Redux and Redux Toolkit
- Organize the Code Structure using ducks pattern recommended by Redux
- ESLint, Pretter, and Stylelint for code quality consistency
- Run typescript type checking in parallel mode - fork-ts-checker-webpack-plugin
- Jest for unit testing
- Dockerize the project

## Reference

1. https://webpack.js.org/guides/printable/
2. https://github.com/Microsoft/TypeScript-Babel-Starter
3. https://developerhandbook.com/webpack/webpack-4-from-absolute-scratch/
