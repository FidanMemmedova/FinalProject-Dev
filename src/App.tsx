import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/HomePage/HomePage";
import { DeliveryPage } from "./pages/DeliveryPage/DeliveryPage";
import { DietsPage } from "./pages/DietsPage/DietsPage";
import { MenuPage } from "./pages/MenuPage/MenuPage";
import { Header } from "./layouts/Header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route  path="/" element={<HomePage />} />
        <Route path="/delivery" element={<DeliveryPage />} />
        <Route path="/diets" element={<DietsPage />} />
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </div>
  );
}

export default App;
