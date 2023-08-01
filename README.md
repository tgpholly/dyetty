# dyetty &nbsp; [![CodeFactor](https://www.codefactor.io/repository/github/tgpholly/dyetty/badge)](https://www.codefactor.io/repository/github/tgpholly/dyetty) &nbsp; [![Node.js CI](https://github.com/tgpholly/dyetty/actions/workflows/node.js.yml/badge.svg?branch=master)](https://github.com/tgpholly/dyetty/actions/workflows/node.js.yml) &nbsp; [![npm](https://img.shields.io/npm/v/dyetty)](https://www.npmjs.com/package/dyetty)
A drop-in, function compatible alternative to chalk that supports CommonJS

## Motivations
When version 5 of chalk was released support for CommonJS was dropped. I don't yet (if ever) want to migrate to ESM so I made this.

## Things to note
When using TypeScript you may need to change the way you import the module if you import chalk like this:
```ts
import chalk from "chalk";
```
To importing it like this:
```ts
import * as chalk from "dyetty";
```
