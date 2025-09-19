import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App.tsx";

// It's not necessary to annotate the type explicitly because TypeScript will 
// automatically infer it as HTMLElement once we use the non-null assertion (!) 
// Example: const rootElement = document.getElementById("root")!
//
// Alternative: use a type assertion instead of ! 
// Example: const rootElement = document.getElementById("root") as HTMLElement

const rootElement: HTMLElement = document.getElementById("root") as HTMLElement;

// The type of "root" is Root (an interface from react-dom/client).
// It provides two main methods:
//   - root.render(children) → to render or update the React tree
//   - root.unmount()        → to unmount the React tree from the DOM
const root = createRoot(rootElement);

root.render(<App />);