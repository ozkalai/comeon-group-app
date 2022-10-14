import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Login from "./pages/login";
import { AuthProvider } from "./lib/hooks/useAuth";
import RequireAuth from "./lib/helper/requiredAuth";
import Casino from "./pages/casino";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/login" element={<Login />} />
            <Route
              path="/"
              element={
                <RequireAuth>
                  <Casino />
                </RequireAuth>
              }
            />
          </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
