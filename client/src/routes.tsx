import { Route, Routes } from "react-router-dom";
import Dashboard from "@/components/dashboard";
// import Predictions from '@/components/predictions'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/predictions" element={""} />
    </Routes>
  );
};

export default Router;
