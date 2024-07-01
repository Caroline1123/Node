#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

import chalk from "chalk";
import boxen from "boxen";
import { readFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const outputFilePath = join(__dirname, "output");
const output = readFileSync(outputFilePath, "utf8");

console.log(output);
