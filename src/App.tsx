import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./app.scss";
import HomePage from "./pages/HomePage";
import TestPage from "./pages/TestPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<HomePage />}></Route>
        <Route path="test-page" element={<TestPage />}></Route>
        <Route path="result-page" element={<TestPage isResult={true} />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
