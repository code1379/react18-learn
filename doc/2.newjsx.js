const babel = require("@babel/core");
const sourceCode = `
<h1>
  hello <span style={{ color: "red" }}>world</span>
</h1>
`;

const result = babel.transform(sourceCode, {
  plugins: [["@babel/plugin-transform-react-jsx", { runtime: "automatic" }]],
});

console.log(result);

// import { jsx as _jsx } from "react/jsx-runtime";
// import { jsxs as _jsxs } from "react/jsx-runtime";
// _jsxs("h1", {
//   children: [
//     "hello ",
//     _jsx("span", {
//       style: {
//         color: "red",
//       },
//       children: "world",
//     }),
//   ],
// });

// React.createElement = jsx
// 新版的 children 也在 props 中
