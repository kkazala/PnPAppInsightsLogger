import { readFileSync, writeFileSync, copyFileSync, readdirSync, rmdirSync, rmSync } from 'fs';
import { resolve as _resolve, dirname as _dirname } from 'path';

import { fileURLToPath } from 'url';
const __dirname = _dirname(fileURLToPath(new URL(import.meta.url)))

// DO NOT DELETE THIS FILE
// This file is used by build system to build a clean npm package with the compiled js files in the root of the package.
// It will not be included in the npm package.

function main() {
    //copy package.json and .npmignore to dist folder
    //remove scripts and devDependencies from package.json
    const source = readFileSync(__dirname + "/../package.json").toString('utf-8');
    const sourceObj = JSON.parse(source);
    sourceObj.scripts = {};
    sourceObj.devDependencies = {};
    if (sourceObj.main.startsWith("dist/")) {
        sourceObj.main = sourceObj.main.slice(5);
    }
    writeFileSync("dist/package.json", Buffer.from(JSON.stringify(sourceObj, null, 2), "utf-8"));
    copyFileSync(__dirname + "/../.npmignore", "dist/.npmignore");
    copyFileSync(__dirname + "/../.npmrc", "dist/.npmrc");

    //copy all files from dist/src to dist
    readdirSync("dist/src").forEach((file) => {
        copyFileSync("dist/src/" + file, "dist/" + file)
    });
    //delete src folder
    rmSync("dist/src", { recursive: true });
    //delete tools folder
    rmSync("dist/tools", { recursive: true });
}

main();