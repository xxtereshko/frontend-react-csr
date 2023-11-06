# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list

## 🛠️ Git Hooks

Git hooks workflow is implemented using [Lefthook](https://github.com/evilmartians/lefthook) to ensure code quality, security, and adherence to conventional commit standards.

### 🚀 Pre-Push Hooks

Conducts a [security audit](https://classic.yarnpkg.com/lang/en/docs/cli/audit/) to identify and fix potential vulnerabilities in the project dependencies.

### 📝 Pre-Commit Hooks

Applies [ESLint](https://eslint.org/) fixes, ensuring consistent coding style and best practices.

Formats code using [Prettier](https://prettier.io/), maintaining a consistent code style across the entire project.

### 🎉 Conventional Commit Validation

We enforce [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/) to ensure clear and structured commit messages, enhancing collaboration and understanding among team members.
