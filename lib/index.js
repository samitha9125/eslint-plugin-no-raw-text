/**
 * @fileoverview The ESLint plugin &#34;no-raw-text&#34; enforces a rule that restricts the usage of raw text directly in JSX components, ensuring that text content is only rendered within specified components, such as &lt;p&gt;, &lt;span&gt;, or any other components passed as parameters to the plugin. This helps maintain a consistent structure and style in your React codebase by confining text rendering to specific, predefined components.
 * @author Samitha Nanayakkara
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

const requireIndex = require("requireindex");

//------------------------------------------------------------------------------
// Plugin Definition
//------------------------------------------------------------------------------


// import all rules in lib/rules
module.exports.rules = requireIndex(__dirname + "/rules");



