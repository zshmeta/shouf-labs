// path-setup.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const getAppRoot = () => {
  let currentDir = __dirname;
  while (currentDir !== path.parse(currentDir).root) {
    if (fs.existsSync(path.join(currentDir, 'package.json'))) {
      // Assuming the presence of package.json indicates the project root
      return currentDir;
    }
    currentDir = path.dirname(currentDir);
  }
  // Fallback to __dirname if no package.json is found in the directory hierarchy
  return __dirname;
};

const componentsPath = () => path.join(getAppRoot(), 'src/components'); 

// const shoufPath = () => path.join(getAppRoot(), '.shouf');
// if (!fs.existsSync(shoufPath())) {
//   fs.mkdirSync(shoufPath());
// }

export { shoufPath, componentsPath };