// get-components.js
import fs from 'fs';
import path from 'path';
import { componentsPath } from './set-app-path.js';
import { componentJsonPath, findComponents } from './get-components.js';
 

const listComponents = () => {
  try {
    const data = fs.readFileSync(componentJsonPath, 'utf8');
    const components = JSON.parse(data);
    return components.map(component => ({
      name: component.name,
      path: component.path,
    }));
  } catch (error) {
    console.error('Failed to read or parse component data:', error);
    return [];
  }
};

export { listComponents};
