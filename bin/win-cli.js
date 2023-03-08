#!/usr/bin/env node
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

const viewPath = path.resolve(projectPath, 'app/views');
fs.mkdirSync(viewPath, { recursive: true });
// ROUTER
const routePath = path.resolve(projectPath, 'app/routes');
fs.mkdirSync(routePath, { recursive: true });

const publicPath = path.resolve(projectPath, 'public');
fs.mkdirSync(publicPath, { recursive: true });

const imagePath = path.resolve(projectPath, 'public/images');
fs.mkdirSync(imagePath, { recursive: true });

const distPath = path.resolve(projectPath, 'public/dist');
fs.mkdirSync(distPath, { recursive: true });

const samplesPath = path.resolve(projectPath, 'public/dist');
fs.mkdirSync(samplesPath, { recursive: true });

const configPath = path.resolve(projectPath, 'app/config');
fs.mkdirSync(configPath, { recursive: true });

const controllerPath = path.resolve(projectPath, 'app/controller');
fs.mkdirSync(controllerPath, { recursive: true });

const databasePath = path.resolve(projectPath, 'app/database');
fs.mkdirSync(databasePath, { recursive: true });

const migrationsPath = path.resolve(projectPath, 'app/database/migrations');
fs.mkdirSync(migrationsPath, { recursive: true });

const seedersPath = path.resolve(projectPath, 'app/database/seeders');
fs.mkdirSync(seedersPath, { recursive: true });

const helpersPath = path.resolve(projectPath, 'app/helpers');
fs.mkdirSync(helpersPath, { recursive: true });
// middleware models repository
const modelsPath = path.resolve(projectPath, 'app/models');
fs.mkdirSync(modelsPath, { recursive: true });

const middlewarePath = path.resolve(projectPath, 'app/middleware');
fs.mkdirSync(middlewarePath, { recursive: true });

const repositoryPath = path.resolve(projectPath, 'app/repository');
fs.mkdirSync(repositoryPath, { recursive: true });

const utilsPath = path.resolve(projectPath, 'app/utils');
fs.mkdirSync(utilsPath, { recursive: true });

// Define the template folder and files to copy
const templatePath = path.join(__dirname, '../templates');
const templateFiles = [
    { src: 'app.js', dest: path.join(projectPath, 'app.js') },
    { src: '.sequelizerc', dest: path.join(projectPath, '.sequelizerc') },
    { src: 'package.json', dest: path.join(projectPath, 'package.json') },
    { src: 'app/views/index.ejs', dest: path.join(viewPath, 'index.ejs') },
    { src: 'app/routes/index.router.js', dest: path.join(routePath, 'index.router.js') },
    { src: 'app/routes/user.router.js', dest: path.join(routePath, 'user.router.js') },
    { src: 'app/config/database.js', dest: path.join(configPath, 'database.js') },
    { src: 'app/models/index.js', dest: path.join(modelsPath, 'index.js') },
    { src: 'samples/.env.sample', dest: path.join(samplesPath, '.env.sample') },
    { src: 'samples/app.conf.sample', dest: path.join(samplesPath, 'app.conf.sample') },
    { src: 'samples/app.keys.sample', dest: path.join(samplesPath, 'app.keys.sample') },
    { src: 'samples/db.conf.sample ', dest: path.join(samplesPath, 'db.conf.sample ') },

];

// Copy the template files to the destination folder
templateFiles.forEach(({ src, dest }) => {
    const templateContent = fs.readFileSync(path.join(templatePath, src), 'utf-8');
    const projectContent = templateContent.replace(/\{\{projectName\}\}/g, projectName);
    fs.writeFileSync(dest, projectContent, 'utf-8');
});

console.log(`Project "${projectName}" has been generated successfully!`);