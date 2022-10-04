import { createRoot } from "react-dom/client";
import { App } from "./App";
import { TodoProvider } from "./hooks/TodoProvider";

const container = document.getElementById("root")!;
const root = createRoot(container);

root.render(
  <TodoProvider>
    <App />
  </TodoProvider>
);