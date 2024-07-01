// Pull in our modules
import chalk from "chalk";
import boxen from "boxen";
import { writeFileSync } from "node:fs";
import { join } from "node:path";

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: "round",
};

// Text + chalk definitions
const data = {
  name: chalk.white("caroline"),
  handle: chalk.red("deconinck"),
  work: chalk.white("Junior developer at Becode.org"),
  npm: chalk.gray("https://npmjs.com/") + chalk.red("caroline1123"),
  github: chalk.gray("https://github.com/") + chalk.green("Caroline1123"),
  linkedin:
    chalk.gray("https://linkedin.com/in/") +
    chalk.blue("caroline-deconinck-dev"),
  npx: `${chalk.red("npx")} ${chalk.white("caroline1123")}`,
  labelWork: chalk.white.bold("    Work:"),
  labelnpm: chalk.white.bold("     npm:"),
  labelGitHub: chalk.white.bold("  GitHub:"),
  labelLinkedIn: chalk.white.bold("LinkedIn:"),
  labelCard: chalk.white.bold("    Card:"),
};

// Actual strings we're going to output
const newline = "\n";
const heading = `${data.name} / ${data.handle}`;
const working = `${data.labelWork}  ${data.work}`;
const npming = `${data.labelnpm}  ${data.npm}`;
const githubing = `${data.labelGitHub}  ${data.github}`;
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`;
const carding = `${data.labelCard}  ${data.npx}`;

// Put all our output together into a single variable so we can use boxen effectively
const output =
  heading + // data.name + data.handle
  newline +
  newline + // Add one whole blank line
  working +
  newline + // data.labelWork + data.work
  npming +
  newline + // data.labelnpm + data.npm
  githubing +
  newline + // data.labelGitHub + data.github
  linkedining +
  newline + // data.labelLinkedIn + data.linkedin
  // webing +
  // newline +
  newline + // data.labelWeb + data.web
  carding; // data.labelCard + data.npx

writeFileSync(
  join(import.meta.dirname, "bin/output"),
  chalk.green(boxen(output, options))
);
