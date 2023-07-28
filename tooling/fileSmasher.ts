// fileSmasher ~.~
// for when you're just too lazy to
// do it properly.

import { readdirSync, lstatSync, readFileSync, writeFileSync } from "fs";

const tsFileData:Array<string> = new Array<string>();

// Github Actions forced my hand
const toolinglessFolderPath = __dirname.replace("/tooling", "/");

function readDir(nam:string) {
	const files = readdirSync(nam);
	for (const file of files) {
		if (nam == toolinglessFolderPath && (file.startsWith(".") || file == "tooling" || file == "lib" || file == "node_modules" || file == "combined.ts")) {
			continue;
		}
		
		if (lstatSync(`${nam}/${file}`).isDirectory()) {
			readDir(`${nam}/${file}`);
		} else if (file.endsWith(".ts")) {
			tsFileData.push(readFileSync((`${nam}/${file}`).replace("//", "/")).toString());
		}
	}
}

readDir(toolinglessFolderPath);

const combinedFiles = tsFileData.join("\n");

const splitLines = combinedFiles.split("\n");
const resultLines:Array<string> = new Array<string>();

const unExport:string[] = [
	
];

function checkForMatchAndReplace(s:string) {
	for (const tUExp of unExport) {
		const spl = tUExp.split(":");
		const type = spl[0];
		if (s.startsWith(`export ${type} ${spl[1]}`)) {
			return s.replace(`export ${type} ${spl[1]}`, `${type} ${spl[1]}`);
		}
	}

	return s;
}

// Let's process the file to make it usable
for (const line of splitLines) {
	// Throw away imports as they aren't needed
	// TODO: Add allow list for npm module imports
	if (line.startsWith("import")) {
		continue;
	}
	// Fix up classes, interfaces and such.
	resultLines.push(checkForMatchAndReplace(line));
}

writeFileSync("./combined.ts", resultLines.join("\n"));
