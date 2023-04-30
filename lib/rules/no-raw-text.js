/**
 * @fileoverview The ESLint plugin "no-raw-text" enforces a rule that restricts the usage of raw text directly in JSX components, ensuring that text content is only rendered within specified components
 * @author Samitha Nanayakkara
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

/** @type {import('eslint').Rule.RuleModule} */
module.exports = {
  meta: {
    type: "suggestion",
    docs: {
      description: "Disallow raw text in components except those specified",
      category: "Best Practices",
      recommended: false,
    },
    messages: {
      notAllowed: "Raw text is not allowed within this component.",
    },
    schema: [
      {
        type: "array",
        items: {
          type: "string",
        },
        uniqueItems: true,
      },
    ],
  },

  create(context) {
    const allowedTags = new Set(context.options[0] || []);
    function checkText(node) {
      if (typeof node.value === "string" && node.value.trim().length > 0) {
        context.report({
          node,
          messageId: "notAllowed",
        });
      }
    }

    function isAllowedTag(node) {
      return (
        node.openingElement && allowedTags.has(node.openingElement.name.name)
      );
    }

    return {
      JSXText(node) {
        if (!node.parent || !isAllowedTag(node.parent)) {
          checkText(node);
        }
      },
    };
  },
};
