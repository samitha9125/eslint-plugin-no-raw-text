# ESlint Plugin to enforce No Raw Text

[![Maintainability](https://api.codeclimate.com/v1/badges/4307f36f52877ccb301c/maintainability)](https://codeclimate.com/github/samitha9125/eslint-plugin-no-raw-text/maintainability) [![Test Coverage](https://api.codeclimate.com/v1/badges/4307f36f52877ccb301c/test_coverage)](https://codeclimate.com/github/samitha9125/eslint-plugin-no-raw-text/test_coverage) [![codecov](https://codecov.io/gh/samitha9125/eslint-plugin-no-raw-text/branch/main/graph/badge.svg?token=USMU2NB7C4)](https://codecov.io/gh/samitha9125/eslint-plugin-no-raw-text) ![main](https://github.com/samitha9125/eslint-plugin-no-raw-text/actions/workflows/main.yml/badge.svg)

## Introduction

In modern mobile/web development, especially when supporting multiple languages with internationalization (i18n), it is crucial to ensure that all text content is managed in a consistent and maintainable manner. Raw text scattered throughout JSX components can lead to difficulties in managing translations and a less consistent structure in your codebase.

The ESLint plugin "no-raw-text" is designed to address this issue by enforcing a rule that restricts the usage of raw text directly in JSX components. 

But if you must, this also provides a way for the text content to only be rendered within specified components, such as`<p>`, `<span>`, `<Text>` or any other component.
## Why this plugin?

The popular plugin `eslint-plugin-react-native` used in react native includes a rule that enforces removing the raw text, but it still permits text content within the react native `<Text>` component.

For developers who require additional control over which components are allowed to contain raw text, this plugin offers a valuable and flexible solution.


## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
yarn add -D eslint
```

Next, install `eslint-plugin-no-raw-text`:

```sh
yarn add -D eslint-plugin-no-raw-text
```

## Usage

Add `no-raw-text` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": ["no-raw-text"]
}
```

Then configure the rules you want to use under the rules section. Once you enable this, it will errors for all the components that we have mentioned.

A sample can be found below.

```yaml
'rules': {
    'no-raw-text/no-raw-text':["error", ["Text", "p"]]
}
```

According to the above configuration, the plugin will throw an error if you use hardcoded text content inside any other component except `<Text> or <p>`.

## Rule Configurations

The rule accepts an array of strings as the second parameter. The strings can be any component names that you want to allow raw text content. If you want to allow raw text content only in the `<Text>` component, you can pass `["Text"]` as the second parameter.

Also, you may omit the second parameter to show errors/warnings in all locations which use raw texts.

## Contribution

All PRs are welcome. Please raise an issue before raising a PR.