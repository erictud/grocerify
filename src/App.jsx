import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import ErrorPage from "./pages/ErrorPage";
import AppLayout from "./pages/AppLayout";
import CreateList from "./pages/CreateList";
import List from "./pages/List";
import Account from "./pages/Account";

import { GlobalStyles } from "./styles/GlobalStyles";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route path="auth" element={<Auth />} />
          <Route element={<AppLayout />}>
            <Route index element={<Navigate to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="create-list" element={<CreateList />} />
            <Route path="list/:listId" element={<List />} />
            <Route path="account" element={<Account />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
