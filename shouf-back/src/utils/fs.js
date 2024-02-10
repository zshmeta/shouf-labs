import globby from 'fast-glob';
import * as fseExtra from 'fs-extra';
import { createHash } from 'crypto';

// We assign fs to fseExtra for easy usage
const fs = fsExtra; 

// We export fs and globby to make them available in other files
export { fs, globby}

// we identify comon js files 
const isCommonJsFile = (filePath) => {
  return filePath.endsWith('.js') && !filePath.endsWith('.mjs');
}

