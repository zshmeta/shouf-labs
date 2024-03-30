import fs from 'fs';
import path from 'path';
import { parse } from 'react-docgen';
import { componentsPath } from '../bin/shouf.js'; 
import { getAst } from './utils/docHandlers.js';

// // Define the directory for the output JSON file
// const shoufDir = shoufPath();
// const componentJsonPath = path.join(shoufDir, 'components.json');

// Function to find and parse components
const findComponents = () => {
  const componentsSRC = componentsPath();
  const components = []; // This will hold all our component data

  const scanDirectory = (directory) => {
    const items = fs.readdirSync(directory);

    items.forEach((item) => {
      const itemPath = path.join(directory, item);
      const stat = fs.statSync(itemPath);

      // If the item is a directory, it's a component
      if (stat.isDirectory()) {
        const subItems = fs.readdirSync(itemPath);
        const componentData = {
          jsx: null,
          styledJs: null,
          css: null,
          md: null,
          otherFiles: [],
        };

        // Loop through the files in the component directory
        subItems.forEach((subItem) => {
          const subItemPath = path.join(itemPath, subItem);
          const subStat = fs.statSync(subItemPath);

          if (subStat.isFile()) {
            const content = fs.readFileSync(subItemPath, 'utf8');
            const extname = path.extname(subItem);

            // Parse the different file types
            if (extname === '.jsx') {
              try {
                const ast = getAst(content, subItemPath);
                const parsed = parse(content);

                componentData.jsx = {
                  name: path.basename(subItem, extname),
                  props: parsed.props,
                  ast: ast,
                  path: subItemPath,
                  code: content,
                };
              } catch (error) {
                console.error(`Error parsing component ${subItem}:`, error);
              }
            } else if (extname === '.styled.js') {
              componentData.styledJs = {
                name: path.basename(subItem, extname),
                path: subItemPath,
                code: content,
              };
            } else if (extname === '.css') {
              componentData.css = {
                name: path.basename(subItem, extname),
                path: subItemPath,
                code: content,
              };
            } else if (extname === '.md' || extname === '.mdx') {
              componentData.md = {
                name: path.basename(subItem, extname),
                path: subItemPath,
                code: content,
              };
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

  // Start scanning from the components source directory
  scanDirectory(componentsSRC);

  // Return the array of component data
  return components;
};

// // Function to write the component data to a JSON file
// const writeComponentList = (components) => {
//   fs.writeFileSync(componentJsonPath, JSON.stringify(components, null, 2), 'utf8');
//   console.log('Component documentation generated.');
//   return componentJsonPath;
// };

// Function to update the component list
const updateComponentList = () => {
  const components = findComponents();
  // writeComponentList(components);
};

// Watch for changes in the components path
fs.watch(componentsPath(), (eventType, filename) => {
  console.log(`Change detected in ${filename}`);
  updateComponentList();
});

// Initial generation of component list
updateComponentList();

export { findComponents, components };