import * as parser from "@babel/parser";
import { codeFrameColumns } from "@babel/code-frame";


/*
*
* This file is used to parse the code and get the AST which is the Abstract Syntax Tree
*
* The AST is a tree representation of the abstract syntactic structure of source code.
* Each node of the tree denotes a construct occurring in the source code.
* The syntax is represented in a way that is easy to understand and use.
* The AST is used to get the props of a component and to generate the documentation
*
* */


const plugins = [
  "jsx",
  "asyncGenerators",
  "classProperties",
  "classPrivateProperties",
  "classPrivateMethods",
  [
    "decorators",
    {
      decoratorsBeforeExport: true,
    },
  ],
  "doExpressions",
  "dynamicImport",
  "exportDefaultFrom",
  "exportNamespaceFrom",
  "functionBind",
  "functionSent",
  "importMeta",
  "logicalAssignment",
  "nullishCoalescingOperator",
  "numericSeparator",
  "objectRestSpread",
  "optionalCatchBinding",
  "optionalChaining",
  "partialApplication",
  "throwExpressions",
  "topLevelAwait",
];

const getAst = (code, filename) => {
  try {
    return parser.parse(code, {
      sourceType: "module",
      plugins: [
        ...plugins,
        // addinf specs for ts files
        filename.endsWith(".ts") || filename.endsWith(".tsx") ? "typescript" : "flow",
      ],
    });
  } catch (e) {
    console.error(`\n\n${e.toString()} in ${filename}\n`);
    console.error(codeFrameColumns(code, { start: e.loc }, { highlightCode: true }));
    console.error("");
    throw e;
  }
};

export { getAst };