# fs-sync-utils
This package makes file operations easy to use.

## Features
* Read a file with `const str = read('file.txt')`
* Write a file with `write('out.txt', 'some text')`
* Remove a file with `remove('file.txt')`
* Check if a file exists with `if (exists('file.txt')) {…`

## Usage
`$ npm install --save fs-sync-utils`  
```js
const { read, write, exists, remove } = require('fs-sync-utils')

// write
write('file.txt', 'some text')

// exists
if (exists('file.txt')) {
  // read
  const str = read('file.txt')
  // remove
  remove('file.txt')
}
```

## Related Packages
[files-in-dir](https://www.npmjs.com/package/files-in-dir) Get file names in a directory  
[dirs-in-dir](https://www.npmjs.com/package/dirs-in-dir) Get directory names in a directory  
