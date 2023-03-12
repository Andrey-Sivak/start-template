
# Start template

This start template is based on the bundle of gulp and webpack using a lot of different tools to simplify and automate your work with HTML, CSS, JS, Fonts and of course images.

---

## Installation

### Requirements

This `Start template` requires the following dependencies installed globally on your machine:

- [Node.js](https://nodejs.org/) 18.14
- [gulp.js](https://gulpjs.com/) 4.0.2


### Setup

To start using this staff you need to install the necessary Node.js dependencies the root directory:

#### Node.js

```sh
$ npm i
```
---

## Tools Used
✅ `Gulp` for assets management
  - Optimize images
  - Create `SVG` sprites
  - Local dev server with hot reload
  - Convert `.ttf|.otf` fonts to `.woff|.woff2`

✅ `Webpack` & `Babel` for JavaScript

✅ `PostCSS` using `Tailwind` & `SCSS` for clear and optimize css

✅ `ESLint` & `Prettier` for code styling

✅ `git-commit-msg-linter` for clear commit messages

✅ `validate-branch-name` for branch naming

✅ `Husky` for git hooks:
  - pre-commit - `$ npx validate-branch-name && npm run lint:fix`
  - commit-msg - `$ npx commitlint --edit $1`
  - pre-push - `$ npm run lint`

---

## Structure
```
├── .husky 
│   ├── _
│   ├── commit-msg
│   ├── pre-commit
│   ├── pre-push
├── dist (or build)
│   ├── css
│   │   ├── *.min.css
│   ├── images
│   │   ├── *{.png,.jpg,.jpeg,.gif}
│   ├── js
│   │   ├── *.min.js
│   ├── fonts
│   │   ├── *.{.woff,.woff2}
├── gulp (gulp settings)
│   ├── config
│   │   ├── path.js (project path definitions)
│   │   ├── plugins.js (gulp plugin)
│   ├── tasks (all of gulp tasks)
│   │   ├── { task }.js
├── node_modules
├── src (assets directory)
│   ├── scss
│   │   ├── **/*.scss
│   ├── images
│   │   ├── *{.png,.jpg,.jpeg,.gif}
│   ├── js
│   │   ├── **/*.js
│   ├── fonts
│   │   ├── *.{.woff,.woff2,.ttf,.otf}
├── .babelrc
├── .commitlintrc.json
├── .eslintignore
├── .eslintrc
├── .gitignore
├── .prettierignore
├── .prettierrc
├── commitlint.config.js
├── gulpfile.js (common bundle file)
├── index.html (common html)
├── package.json
├── package-lock.json
├── README.md
└── tailwind.config.cjs
```
---

### Common settings & configurations

✔️  `gulpfile.js` - common bundle file. `gulp` directory - all gulp settings & options

✔️  `gulp/tasks/js.js` - webpack config

✔️  `gulp/tasks/scss.js` - css management

✔️  `gulp/config/path.js` - path management

✔️  `tailwind.config.cjs` - tailwind


---

### Available CLI commands

`npm run dev` : start development, fire dev server.

`npm run build` : create build bundle to `app.path.buildFolder`

`npm run svgSprite` : create svg Sprite

`npm run prepare` : will execute before `npm i` for install Husky

`npm run lint` : apply eslint for `src/js`

`npm run lint:fix` : apply eslint fix for `src/js`

`npm run make:fonts` : After run this command remove `src/scss/fonts.scss` because this file will be created & fill automatically. This task will scan `src/fonts` then create `woff|woff2` fonts for each font then pass its to `src/fonts` and create correct `src/scss/fonts.scss`

___
![GitHub all releases](https://img.shields.io/github/downloads/Andrey-Sivak/project4/total)
![GitHub language count](https://img.shields.io/github/languages/count/Andrey-Sivak/project4)
![GitHub top language](https://img.shields.io/github/languages/top/Andrey-Sivak/project4?color=yellow)
![GitHub forks](https://img.shields.io/github/forks/Andrey-Sivak/project4?style=social)
![GitHub Repo stars](https://img.shields.io/github/stars/Andrey-Sivak/project4?style=social)

