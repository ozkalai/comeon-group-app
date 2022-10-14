import "./App.css";
import Layout from "./components/Layout";
import Login from "./pages/login";
import { AuthProvider } from "./lib/hooks/useAuth";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Layout>
          <Login />
        </Layout>
      </AuthProvider>
    </div>
  );
}

export default App;
