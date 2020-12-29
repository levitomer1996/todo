import logo from "./logo.svg";
import "./App.css";
import Main from "./Pages/Main";
import { AuthProvider } from "./Context/AuthContext";

function App() {
  return (
    <>
      <AuthProvider>
        <Main />
      </AuthProvider>
    </>
  );
}

export default App;
