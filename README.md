# rollup-plugin-polyfill
Rollup Plugin to inject any code you want at the top of your input file.

This is useful for injecting polyfills, or different global settings for your build variants.

## Usage
Check out the example folder to see more configurations
```javascript
const preInject = require('rollup-plugin-polyfill')

export default {
  input: 'index.js',
  output: {
    file: 'bundle.js',
    format: 'iife',
    name: 'example'
  },
  plugins: [
    preInject({
      sourceMap: false, // defaults to true
      injectCode: "", // Injected at the top of the input file
    }),
  ]
}
```
