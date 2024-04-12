// path-setup.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const getAppRoot = () => {
  let currentDir = __dirname;
  let firstPackageJsonFound = false;
  while (currentDir !== path.parse(currentDir).root) {
    if (fs.existsSync(path.join(currentDir, 'package.json'))) {
      if (firstPackageJsonFound) {
        // Return the directory of the second package.json found
        return currentDir;
      } else {
        // Skip the first package.json found
        firstPackageJsonFound = true;
      }
    }
    currentDir = path.dirname(currentDir);
  }
  // Fallback to __dirname if no second package.json is found in the directory hierarchy
  return __dirname;
};

const componentsPath = () => path.join(getAppRoot(), 'src/components'); 

const shoufPath = () => path.join(getAppRoot(), '.shouf');
if (!fs.existsSync(shoufPath())) {
  fs.mkdirSync(shoufPath());
}

export { shoufPath, componentsPath };