import { createRoot } from "react-dom/client";
let element = (
  <h1>
    hello <span style={{ color: "red" }}>world</span>
  </h1>
);

const root = createRoot(document.getElementById("root"));
console.log("%c Line:9 🍔 root", "color:#e41a6a", root);
