#!/usr/bin/env node
// const fs = require('fs');
// const path = require('path');
//
// const args = process.argv.slice(2);
//
// if (args.length !== 1) {
//     console.error('Usage: my-generator <project-name>');
//     process.exit(1);
// }
//
// const projectName = args[0];
// const projectPath = path.resolve(projectName);
//
// fs.mkdirSync(projectPath, { recursive: true });
//
// const viewPath = path.resolve(projectPath, 'views');
// fs.mkdirSync(viewPath, { recursive: true });
//
// const routePath = path.resolve(projectPath, 'routes');
// fs.mkdirSync(routePath, { recursive: true });
//
// console.log(`Project "${projectName}" has been generated successfully!`);

// #!/usr/bin/env node


const fs = require('fs');
const path = require('path');

const args = process.argv.slice(2);

if (args.length !== 1) {
    console.error('Usage: my-generator <project-name>');
    process.exit(1);
}

const projectName = args[0];
const projectPath = path.resolve(projectName);

fs.mkdirSync(projectPath, { recursive: true });

const viewPath = path.resolve(projectPath, 'views');
fs.mkdirSync(viewPath, { recursive: true });

const routePath = path.resolve(projectPath, 'routes');
fs.mkdirSync(routePath, { recursive: true });

// Define the template folder and files to copy
const templatePath = path.join(__dirname, '../templates');
const templateFiles = [
    { src: 'index.js', dest: path.join(projectPath, 'index.js') },
    { src: 'views/index.html', dest: path.join(viewPath, 'index.html') },
    { src: 'routes/index.js', dest: path.join(routePath, 'index.js') }
];

// Copy the template files to the destination folder
templateFiles.forEach(({ src, dest }) => {
    const templateContent = fs.readFileSync(path.join(templatePath, src), 'utf-8');
    const projectContent = templateContent.replace(/\{\{projectName\}\}/g, projectName);
    fs.writeFileSync(dest, projectContent, 'utf-8');
});

console.log(`Project "${projectName}" has been generated successfully!`);