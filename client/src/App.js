import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components";
import { Landing } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<div>wow</div>} />
        </Route>
        <Route path="/landing" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
