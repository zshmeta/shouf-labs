import fs from 'fs';
import path from 'path';
import { parse } from 'react-docgen';
import { componentsPath, shoufPath } from './set-app-path.js'; 
import { getAst } from './utils/docHandlers.js';

const shoufDir = shoufPath();
const componentJsonPath = path.join(shoufDir, 'components.json');

const findComponents = () => {
  const componentsSRC = componentsPath();
  const components = [];

  const scanDirectory = (directory) => {
    const items = fs.readdirSync(directory);

    items.forEach((item) => {
      const itemPath = path.join(directory, item);
      const stat = fs.statSync(itemPath);

      if (stat.isDirectory()) {
        const subItems = fs.readdirSync(itemPath);
        // here we create the object that will hold the component data
        const componentData = {
          jsx: null,
          styles: null,
          md: null,
          test: null,
          otherFiles: [],
        };

        // here we set the file types to mp them to their keys in the served json
const fileTypes = {
  '.jsx': 'jsx',
  '.styled.js': 'styles',
  '.styles.js': 'styles',
  '.css': 'styles',
  '.scss': 'styles',
  '.md': 'md',
  '.mdx': 'md',
  '.test.js': 'test',
};

subItems.forEach((subItem) => {
  const subItemPath = path.join(itemPath, subItem);
  const subStat = fs.statSync(subItemPath);

  if (subStat.isFile()) {
    const content = fs.readFileSync(subItemPath, 'utf8');
    const extname = path.extname(subItem);

    const fileType = Object.keys(fileTypes).find((type) => subItem.endsWith(type));

    if (fileType) {
      const key = fileTypes[fileType];

      if (key === 'jsx') {
        try {
          const ast = getAst(content, subItemPath);
          const parsed = parse(content);
          // as our primary target arjsx files we first look for that

          componentData.jsx = {
            name: path.basename(subItem, fileType),
            props: parsed.props,
            ast: ast,
            path: subItemPath,
            code: content,
          };
        } catch (error) {
          console.error(`Error parsing component ${subItem}:`, error);
        }
      } else {
        // then we look foir the file types we set keys for previously
        componentData[key] = {
          name: path.basename(subItem, fileType),
          path: subItemPath,
          code: content,
        };
      }
    } else {
      componentData.otherFiles.push({
        name: path.basename(subItem, extname),
        path: subItemPath,
        code: content,
      });
    }
  }
});

        // Add the component data to the components array
        components.push(componentData);
      }
    });
  };

  scanDirectory(componentsSRC);

  return components;
};

const writeComponentList = (components) => {
  fs.writeFileSync(componentJsonPath, JSON.stringify(components, null, 2), 'utf8');
  console.log('Component documentation generated.');
  return componentJsonPath;
};

const updateComponentList = () => {
  const components = findComponents();
  writeComponentList(components);
};

fs.watch(componentsPath(), (eventType, filename) => {
  console.log(`Change detected in ${filename}`);
  updateComponentList();
});

updateComponentList();

export { findComponents, writeComponentList, componentJsonPath, updateComponentList };