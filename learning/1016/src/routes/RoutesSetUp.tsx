import { Routes, Route, Router } from "react-router-dom";
import Home from "../pages/Home";
import NoMatch from "../pages/NoMatch";

export default function RoutesSetUp() {
  return (
    <Routes>
      <Route path="/" element={<Home title="Home" />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}
