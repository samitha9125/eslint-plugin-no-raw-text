/**
 * @fileoverview The ESLint plugin &#34;no-raw-text&#34; enforces a rule that restricts the usage of raw text directly in JSX components, ensuring that text content is only rendered within specified components
 * @author Samitha Nanayakkara
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const rule = require("../../../lib/rules/no-raw-text"),
  RuleTester = require("eslint").RuleTester;
const path = require("path");

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

const ruleTester = new RuleTester({
  parser: path.resolve(__dirname, "../../../node_modules/@babel/eslint-parser"),
  parserOptions: {
    ecmaVersion: 12,
    requireConfigFile: false,
    sourceType: "module",
    babelOptions: {
      presets: ["@babel/preset-react"],
    },
  },
});

ruleTester.run("no-raw-text", rule, {
  valid: [
    { code: "<Text>Hello, World!</Text>", options: [["Text"]] },
    { code: "<span>Hello, World!</span>", options: [["span", "p"]] },
    { code: "<div><p>Hello, World!</p></div>", options: [["p"]] },
    {
      code: `
        function App() {
          return (
            <div>
              <p>Hello, World!</p>
            </div>
          );
        }
      `,
      options: [["p"]],
    },
  ],

  invalid: [
    {
      code: "<div>Hello, World!</div>",
      options: [["p"]],
      errors: [{ message: "Raw text is not allowed within this component." }],
    },
    {
      code: `
        function App() {
          return (
            <div>
              Hello, World!
            </div>
          );
        }
      `,
      options: [["p"]],
      errors: [{ message: "Raw text is not allowed within this component." }],
    },
    {
      code: `
        function App() {
          return (
            <Text>
              Hello, World!
            </Text>
          );
        }
      `,
      options: [],
      errors: [{ message: "Raw text is not allowed within this component." }],
    },
  ],
});
