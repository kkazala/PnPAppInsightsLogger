const fs = require('fs');

// DO NOT DELETE THIS FILE
// This file is used by build system to build a clean npm package with the compiled js files in the root of the package.
// It will not be included in the npm package.

function main() {
    //copy package.json and .npmignore to dist folder
    //remove scripts and devDependencies from package.json
    const source = fs.readFileSync(__dirname + "/../package.json").toString('utf-8');
    const sourceObj = JSON.parse(source);
    sourceObj.scripts = {};
    sourceObj.devDependencies = {};
    if (sourceObj.main.startsWith("dist/")) {
        sourceObj.main = sourceObj.main.slice(5);
    }
    fs.writeFileSync("dist/package.json", Buffer.from(JSON.stringify(sourceObj, null, 2), "utf-8"));
    fs.copyFileSync(__dirname + "/../.npmignore", "dist/.npmignore");
    fs.copyFileSync(__dirname + "/../.npmrc", "dist/.npmrc");

    //copy all files from dist/src to dist
    fs.readdirSync("dist/src").forEach((file) => {
        fs.copyFileSync("dist/src/" + file, "dist/" + file)
    });
    //delete src folder
    fs.rmdirSync("dist/src", { recursive: true });
    //delete tools folder
    fs.rmdirSync("dist/tools", { recursive: true });
}

main();