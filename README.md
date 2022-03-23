# Vue 3 + Typescript + Vite

## eslint + prettier + husky
## tailwindcss v3

This template should help get you started developing with Vue 3 and Typescript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)

## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can enable Volar's `.vue` type support plugin by running `Volar: Switch TS Plugin on/off` from VSCode command palette.

## Commit rule

E.g. git commit -m "feat: implement login feature"

| Type     | Subject                                                                                                        |
| -------- | -------------------------------------------------------------------------------------------------------------- |
| feat     | ✨ A new feature                                                                                               |
| fix      | 🐛 A bug fix                                                                                                   |
| docs     | 📚 Documentation only changes                                                                                  |
| style    | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)         |
| refactor | 📦 A code change that neither fixes a bug nor adds a feature                                                   |
| perf     | 🚀 A code change that improves performance                                                                     |
| test     | 🚨 Adding missing tests or correcting existing tests                                                           |
| build    | 🛠 Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)          |
| ci       | ⚙️ Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) |
| chore    | ♻️ Other changes that don't modify src or test files"                                                          |
| revert   | 🗑 Reverts a previous commit                                                                                    |