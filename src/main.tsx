import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { ConfigProvider } from "antd";
import { CategoryProvider } from "./provider/CategoryProvider.tsx";
import { NavBarProvider } from "./provider/NavBarProvider.tsx";
import { ToolsProvider } from "./provider/ToolsProvider.tsx";
import { QueryClientProvider, QueryClient } from "react-query";

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
  <QueryClientProvider client={queryClient}>
    <ToolsProvider>
      <NavBarProvider>
        <CategoryProvider>
          <ConfigProvider
            theme={
              {
                // 1. Use dark algorithm
                // algorithm: theme.darkAlgorithm,
                // 2. Combine dark algorithm and compact algorithm
                // algorithm: [theme.darkAlgorithm, theme.compactAlgorithm],
              }
            }
          >
            <App />
          </ConfigProvider>
        </CategoryProvider>
      </NavBarProvider>
    </ToolsProvider>
  </QueryClientProvider>
  // </React.StrictMode>
);
