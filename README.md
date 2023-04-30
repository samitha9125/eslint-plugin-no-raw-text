# eslint-plugin-no-raw-text

The ESLint plugin &#34;no-raw-text&#34; enforces a rule that restricts the usage of raw text directly in JSX components, ensuring that text content is only rendered within specified components, such as &lt;p&gt;, &lt;span&gt;, or any other components passed as parameters to the plugin. This helps maintain a consistent structure and style in your React codebase by confining text rendering to specific, predefined components.

## Installation

You'll first need to install [ESLint](https://eslint.org/):

```sh
npm i eslint --save-dev
```

Next, install `eslint-plugin-no-raw-text`:

```sh
npm install eslint-plugin-no-raw-text --save-dev
```

## Usage

Add `no-raw-text` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "no-raw-text"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "no-raw-text/rule-name": 2
    }
}
```

## Rules

<!-- begin auto-generated rules list -->
TODO: Run eslint-doc-generator to generate the rules list.
<!-- end auto-generated rules list -->


