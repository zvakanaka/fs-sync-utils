const fs = require('fs')

module.exports = {
  exists,
  read,
  write,
  delete: remove,
  remove,
  rm: remove,
  mkdir,
  makeDir: mkdir,
  makeDirectory: mkdir,
  removeDir: removeDirectory,
  removeDirectory,
  rmdir: removeDirectory,
  rmDir: removeDirectory
};

function exists(path) {
  return fs.existsSync(path);
}

function read(fileName) {
  try {
    const content = fs.readFileSync(fileName).toString();
    return content;
  } catch (e) {
    throw new Error(e);
  }
}

function write(fileName, content) {
  if (!fileName || !content) {
    throw new Error('Both file name and content must be provided in order to write to file');
  }

  try {
    fs.writeFileSync(fileName, content);
  } catch (e) {
    throw new Error(e);
  }
}

function remove(fileName) {
  try {
   fs.unlinkSync(fileName);
  } catch (e) {
   throw new Error(e);
  }
}

function mkdir(dirPath) {
  try {
    fs.mkdirSync(dirPath, { recursive: true });
  } catch (e) {
    throw new Error(e);
  }
}

function removeDirectory(dirName) {
  try {
    fs.rmdirSync(dirName, { recursive: true });
  } catch (e) {
    throw new Error(e);
  }
}
