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
  const componentData = {
    jsx: null,
    styledJs: null,
    css: null,
    otherFiles: [],
  };

  items.forEach((item) => {
    const itemPath = path.join(directory, item);
    const stat = fs.statSync(itemPath);

    if (stat.isDirectory()) {
      scanDirectory(itemPath);
    } else if (stat.isFile()) {
      const content = fs.readFileSync(itemPath, 'utf8');
      const extname = path.extname(item);

      if (extname === '.jsx') {
        try {
          const ast = getAst(content, itemPath);
          console.log('AST:', ast);

          // Assuming the parse function returns an object with a props property
          const parsed = parse(content);

          componentData.jsx = {
            name: path.basename(item, extname),
            props: parsed.props,
            ast: ast,
            path: itemPath,
            code: content,
          };
        } catch (error) {
          console.error(`Error parsing component ${item}:`, error);
        }
      } else if (extname === '.styled.js') {
        componentData.styledJs = {
          name: path.basename(item, extname),
          path: itemPath,
          code: content,
        };
      } else if (extname === '.css') {
        componentData.css = {
          name: path.basename(item, extname),
          path: itemPath,
          code: content,
        };
      } else {
        componentData.otherFiles.push({
          name: path.basename(item, extname),
          path: itemPath,
          code: content,
        });
      }
    }
  });

  return componentData;
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
