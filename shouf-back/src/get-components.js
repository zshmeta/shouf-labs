import fs from 'fs';
import path from 'path';
import { parse } from 'react-docgen';
import { componentsPath, shoufPath } from './set-app-path.js'; 


  const componentJsonPath = path.join(shoufPath()  , 'components.json');

const findComponents = () => {
  const componentsSRC = componentsPath();
  const componentData = [];

  const scanDirectory = (directory) => {
    const items = fs.readdirSync(directory);
    items.forEach((item) => {
      const itemPath = path.join(directory, item);
      const stat = fs.statSync(itemPath);

      if (stat.isDirectory()) {
        scanDirectory(itemPath);
      } else if (stat.isFile() && ['.jsx'].includes(path.extname(item))) {
        const content = fs.readFileSync(itemPath, 'utf8');
        try {
          const parsed = parse(content);
          console.log('Parsed:', parsed);
          
          componentData.push({
            name: path.basename(item, path.extname(item)),
            props: parsed.props,
          });
        } catch (error) {
          console.error(`Error parsing component ${item}:`, error);
        }
      }
    });
  };

  scanDirectory(componentsSRC);

  fs.writeFileSync(componentJsonPath, JSON.stringify(componentData, null, 2), 'utf8');
  console.log('Component documentation generated.');
};

export { findComponents, componentJsonPath };
