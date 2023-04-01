import { Route, Routes } from "react-router";
import "./App.css";
import routesConfig from "./routes";

function App() {
  return (
    <div className="App">
      <Routes>
        {routesConfig.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
