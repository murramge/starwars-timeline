import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App"; // .js 확장자는 생략
import "./index.css";
import ApolloProvider from "./ApolloProvider"; // .js 확장자는 생략

// root 엘리먼트는 null이 아닐 것임을 보장
const rootElement = document.getElementById("root");

if (rootElement) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <ApolloProvider>
        <App />
      </ApolloProvider>
    </StrictMode>
  );
} else {
  console.error("Root element not found");
}
