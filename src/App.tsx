import "./App.css";
import Header from "./components/Header";
import WhatsappBubble from "./components/WhatsappBubble";
import HomePage from "./pages/HomePage";
import ServiceDetailPage from "./pages/ServiceDetailPage";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/:slug" element={<ServiceDetailPage />} />
      </Routes>
      <WhatsappBubble />
    </>
  );
}

export default App;
