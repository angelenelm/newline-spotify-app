import { useState, useEffect } from "react";
import { accessToken } from "./spotify";
import "./App.css";

function App() {
  const [token, setToken] = useState(null);
  useEffect(() => {
    setToken(accessToken);
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        {!token ? (
          <a className="App-link" href="http://localhost:8888/login">
            Log in to Spotify
          </a>
        ) : (
          <h1>Logged in!</h1>
        )}
      </header>
    </div>
  );
}

export default App;
