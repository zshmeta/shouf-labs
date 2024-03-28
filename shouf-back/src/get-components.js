import fs from 'fs';
import path from 'path';
import { parse } from 'react-docgen';
import { componentsPath, shoufPath } from './set-app-path.js'; 
import { getAst } from './utils/docHandlers.js';

const shoufDir = shoufPath();
const componentJsonPath = path.join(shoufDir, 'components.json');

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
    } else if (stat.isFile()) {
      const extname = path.extname(item);
      if (['.jsx', '.styled.js', '.css'].includes(extname)) {
        const content = fs.readFileSync(itemPath, 'utf8');
        try {
          if (extname === '.jsx') {
            const ast = getAst(content, itemPath);
            console.log('AST:', ast);

            const parsed = parse(content);

            componentData.push({
              name: path.basename(item, path.extname(item)),
              props: parsed.props,
              ast: ast,
              path: itemPath,
              code: content,
            });
          } else {
            // adding the styled files to the arrau
            const lastComponent = componentData[componentData.length - 1];
            if (lastComponent && lastComponent.name === path.basename(item, extname)) {
              lastComponent[extname === '.styled.js' ? 'styledJsCode' : 'cssCode'] = content;
            }
          }
        } catch (error) {
          console.error(`Error parsing component ${item}:`, error);
        }
      }
    }
  });
};

  scanDirectory(componentsSRC);

  return componentData;
};

const writeComponentList = (componentData) => {
  fs.writeFileSync(componentJsonPath, JSON.stringify(componentData, null, 2), 'utf8');
  console.log('Component documentation generated.');
  return componentJsonPath;
};

const updateComponentList = () => {
  const componentData = findComponents();
  writeComponentList(componentData);
};

// Watch for changes in the components path
fs.watch(componentsPath(), (eventType, filename) => {
  console.log(`Change detected in ${filename}`);
  updateComponentList();
});

// Initial generation of component list
updateComponentList();

export { findComponents, componentJsonPath };
